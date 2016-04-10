<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Model::unguard();

      DB::table('users')->delete();

      $users = array(
              ['name' => 'Chris Fabio', 'email' => 'chrisvfabio@gmail.com', 'password' => Hash::make('secret')],
      );

      // Loop through each user above and create the record for them in the database
      foreach ($users as $user)
      {
          App\User::create($user);
      }

      DB::table('product')->delete();

      $products = array(
          ['name' => 'Leki Spin Ngt1 V2 Nordic Walking Pole Pair 100-130 cm Nordic walking', 'brand' => 'Leki', 'description' => '<b>DescriptionFeatures:</b><br><ul><li>Trigger 1 glide zone.</li><li>Match size (S-M-L strap).</li><li>Super lock.</li><li>Diamond tip.</li><li>Power grip.</li><li>Ultrasonic finish.</li></ul><br><b>Specifications:</b><br><ul><li>Lengths: 100 - 130 cm.</li></ul>', 'price' => 68.95, 'imageUrl' => 'https://drms3v40st3o6.cloudfront.net/f/59/593363/asolo-escape-ii-trident-pair.jpg'],
          ['name' => 'Asolo Escape II Trident Pair', 'brand' => 'Asolo', 'description' => '<b>Specifications:</b><ul><li>Twistlock</li><li>Trident fast release</li><li>2 thin tube segments: 14/16mm sections</li><li>Sections anodized</li><li>Combines Twistlock and Quicklock </li><li>Material: Alu7075</li><li>Size: 90-135cm</li><li>Weight: 220 g</li></ul>', 'price' => 73.96, 'imageUrl' => 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTu0VzMGje4G0pTJ7403WHpqKOz5Z9jCrqgdZaWfoTEoCIPiigT&usqp=CAE'],
      );

      foreach ($products as $product)
      {
          App\Product::create($product);
      }

      Model::reguard();
    }
}
