<?php

namespace App\Http\Controllers;

use \DateTime;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;

use App\EmailLog;
use Mail;

class EmailController extends Controller
{
  public function __construct() {
    // $this->middleware('jwt.auth');
  }

  public function store() {
    $rules = array(
        'name' => 'required',
        'email' => 'required'
    );

    $messages = [
        'required' => 'The :attribute field is required.',
        'email' => 'The :attribute field must be an email.',
    ];

    $validator = Validator::make(Input::all(), $rules, $messages);

    if ($validator->fails()) {
        return response()->json(['error' => ['status' => ['code' => 400, 'statusText' => 'Bad Request'], 'errors' => $validator->errors()->all(), 'message' => 'Invalid request body. Ensure all fields are specified and in JSON format.']]);
    } else {
      $email = new EmailLog();
      $email->name = Input::get('name');
      $email->email = Input::get('email');

      if (Input::get('phone') != null) {
        $email->phone = Input::get('phone');
      }

      if (Input::get('notes') != null) {
        $email->notes = Input::get('notes');
      }
      $email->created_at = new DateTime();
      $email->updated_at = new DateTime();

      // Send email
      // send email to heather
      $heatherEmail = Mail::send('email.contact', ['name' => $email->name, 'email' => $email->email, 'notes' => $email->notes], function($m) use ($email) {
        $m->from($email->email, $email->name);
        // $m->to('heather@essentialnordicwalking.com.au', 'Essential Nordic Walking - Heather Thorne')->subject("Website Form Request");
        $m->to('chrisvfabio@gmail.com', 'Essential Nordic Walking - Heather Thorne')->subject("Website Form Request");
      });

      $clientEmail = Mail::send('email.client', ['name' => $email->name, 'notes' => $email->notes], function($m) use ($email) {
        $m->from('heather@essentialnordicwalking.com.au', 'Essential Nordic Walking - Heather Thorne');
        $m->to($email->email, $email->name)->subject("Essential Nordic Walking - Thank You");
      });

      if (!$heatherEmail || !$clientEmail) {
        $email->success = false;
        $email->failReason = "Unknown";
        if (!$heatherEmail && !$clientEmail) {
          $email->failReason = "Both Heather's and Clients email failed.";
        } else {
          if (!$heatherEmail) {
            $email->failReason = "Heather's email failed.";
          }
          if (!$clientEmail) {
            $email->failReason = "Clients email failed.";
          }
        }
      } else {
        $email->success = true;
      }

      if ($email->save()) {
        if (!$email->success) {
          return response()->json(['success' => false, 'message' => 'Your message failed to send. Please try again.']);
        }
        return response()->json(['success' => true, 'message' => 'Message was successfully sent. Thank you.']);
      } else {
        return response()->json(['error' => ['status' => ['code' => 500, 'statusText' => 'Internal Server Error'], 'message' => 'Failed to send email. Please try again.']]);
      }
    }
  }

}
