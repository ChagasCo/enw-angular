<?php

namespace App\Http\Controllers;

use \DateTime;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;

use App\Http\Requests;
use App\Product;

class ProductController extends Controller
{
  public function __construct() {
    $this->middleware('jwt.auth', ['except' => ['index', 'show']]);
    // $this->middleware('cors');
  }


  public function index() {
    $products = Product::all();
    return $products;
  }

  public function show($id) {
    $product= Product::find($id);
    if ($product == null) {
      return response()->json(['error' => ['status' => ['code' => 400, 'statusText' => 'Bad Request'], 'message' => 'Cannot find product id: ' . $id]]);
    } else {
      return $product;
    }
  }

  // "name": "Asolo Escape II Trident Pair",
  // "brand": "Asolo",
  // "description": "<b>Specifications:</b><ul><li>Twistlock</li><li>Trident fast release</li><li>2 thin tube segments: 14/16mm sections</li><li>Sections anodized</li><li>Combines Twistlock and Quicklock </li><li>Material: Alu7075</li><li>Size: 90-135cm</li><li>Weight: 220 g<",
  // "imageUrl": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTu0VzMGje4G0pTJ7403WHpqKOz5Z9jCrqgdZaWfoTEoCIPiigT&usqp=CAE",
  // "price": 73.96,
  // "created_at": "2016-04-04 01:29:53",
  // "updated_at": "2016-04-04 01:29:53"

  public function store(Request $request) {
    // validate
    // read more on validation at http://laravel.com/docs/validation
    $rules = array(
        'name' => 'required',
        'brand' => 'required',
        'price' => 'required|numeric'
    );

    $messages = [
        'required' => 'The :attribute field is required.',
        'numeric' => 'The :attribute field must be numeric.'
    ];

    $validator = Validator::make(Input::all(), $rules, $messages);

    if ($validator->fails()) {
        return response()->json(['error' => ['status' => ['code' => 400, 'statusText' => 'Bad Request'], 'errors' => $validator->errors()->all(), 'message' => 'Invalid request body. Ensure all fields are specified and in JSON format.']]);
    } else {
      $product = new Product();
      $product->name = Input::get('name');

      $product->brand = Input::get('brand');

      $product->price = Input::get('price');
      $product->created_at = new DateTime();
      $product->updated_at = new DateTime();

      if(Input::get('description') != null) {
        $product->description = Input::get('description');
      } else {
        $product->description = '<small>No Descriptions</small>';
      }

      if(Input::get('imageUrl') == null) {
 	      $product->imageUrl = 'https://cdn.filestackcontent.com/CwyooxXdTcWtwufoKgOf';
   	} else {
   	      $product->imageUrl = Input::get('imageUrl');
   	}

      if ($product->save()) {
        return response()->json(['success' => true, 'product' => $product]);
      } else {
        return response()->json(['error' => ['status' => ['code' => 500, 'statusText' => 'Internal Server Error'], 'message' => 'Failed to create new product.']]);
      }
    }
  }

  public function update() {
    return response()->json(['message' => 'update product']);
  }

  public function destroy() {
    return response()->json(['message' => 'delete products']);
  }
}
