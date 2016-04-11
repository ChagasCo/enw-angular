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
    $this->middleware('jwt.auth', ['except' => ['create']]);
    // $this->middleware('cors');
  }
  //
  // $table->increments('id');
  // $table->string('name');
  // $table->string('email');
  // $table->string('phone')->nullable();
  // $table->string('notes')->nullable();
  // $table->string('formToken');

  public function create() {
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

      if (isset(Input::get('phone'))) {
        $email->phone = Input::get('phone');
      }

      if (isset(Input::get('notes'))) {
        $email->notes = Input::get('notes');
      }
      s
      $email->created_at = new DateTime();
      $email->updated_at = new DateTime();

      // Send email
      // send email to heather
      Mail::send('emails.contact', ['name' => $email->name, 'notes' => $email->notes], function($m) use ($email) {
        $m->from($email->email, $email->name);
        $m->to('heather@essentialnordicwalking.com.au', 'Essential Nordic Walking - Heather Thorne')->subject("Website Form Request");
      });

      Mail::send('emails.client', ['name' => $email->name, 'notes' => $email->notes], function($m) use ($email) {
        $m->from('heather@essentialnordicwalking.com.au', 'Essential Nordic Walking - Heather Thorne');
        $m->to($email->email, $email->name)->subject("Essential Nordic Walking - Thank You");
      });

      if ($email->save()) {
        return response()->json(['success' => true, 'message' => 'Message was successfully sent. Thank you.']);
      } else {
        return response()->json(['error' => ['status' => ['code' => 500, 'statusText' => 'Internal Server Error'], 'message' => 'Failed to send email. Please try again.']]);
      }
    }

    // $products = Product::all();
    // return $products;
    return response()->json(["message" => "test!"]);
  }

}

// validate
// read more on validation at http://laravel.com/docs/validation
$rules = array(
    'name' => 'required',
    'brand' => 'required',
    'description' => 'required',
    'imageUrl' => 'required|url',
    'price' => 'required|numeric'
);

$messages = [
    'required' => 'The :attribute field is required.',
    'url' => 'The :attribute field must be a url.',
    'numeric' => 'The :attribute field must be numeric.',
];
