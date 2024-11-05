<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\RandomNumberController;

class PrediksiController extends Controller
{
    public function show(Request $request)
    {
      // Ambil data dari query string jika ada
      $page = $request->query('page');
      $pasaran = $request->query('pasaran', 'default-pasaran');
      $tanggal = $request->query('tanggal', now()->toDateString());

      // Baca data dari file JSON
      $jsonPath = storage_path('random_numbers.json');
      $randomNumbers = [
          'variables' => [],
          '3d_variables' => [],
          '2d_variables' => [],
          'single_digit_variables' => [],
          'double_digit_variables' => [],
          'nmhewan' => [],
          'fthewan' => [],
      ];

      // Pastikan file JSON ada dan tidak kosong
      if (File::exists($jsonPath)) {
          $jsonContent = File::get($jsonPath);
          if (!empty($jsonContent)) {
              $decodedData = json_decode($jsonContent, true);
              if (is_array($decodedData)) {
                  $randomNumbers = $decodedData; // Ambil data yang sudah disimpan
              }
          }
      }

      // Kirim data ke view home
      return view('prediksi', array_merge([
          'page'    => $page,
          'pasaran' => $pasaran,
          'tanggal' => $tanggal,
          'variables' => $randomNumbers['variables'],
          'threeDigitVariables' => $randomNumbers['3d_variables'],
          'twoDigitVariables' => $randomNumbers['2d_variables'],
          'singleDigitVariables' => $randomNumbers['single_digit_variables'],
          'doubleDigitVariables' => $randomNumbers['double_digit_variables'],
          'nmhewan' => $randomNumbers['nmhewan'],
          'fthewan' => $randomNumbers['fthewan'],
      ]));
  }
}
