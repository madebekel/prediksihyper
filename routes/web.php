<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PrediksiController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RandomNumberController;


// routes/web.php
//Route::get('/home', function () {
    //return view('home');
//})->name('home');

Route::get('/home', [HomeController::class, 'index']);
Route::get('/first-page', [HomeController::class, 'prediksi']);
// routes/web.php
Route::get('/prediksi', [PrediksiController::class, 'show']);
//menampilkan file prediksi ke home
Route::get('/prediksi', [HomeController::class, 'prediksi']);
//random nomer
Route::get('/prediksi', [RandomNumberController::class, 'generateRandomNumbers']);
Route::get('/prediksi', [RandomNumberController::class, 'displayJson']);
Route::get('/prediksi', [PrediksiController::class, 'show'])->name('prediksi.show');
Route::get('/set-tanggal', function () {
    session(['tanggal' => now()->toDateString()]);
    return redirect('/first-page.php'); // pastikan ini adalah path yang benar
});
Route::get('/prediksi', [RandomNumberController::class, 'showRandomNumbers']);

//Route::get('/prediksi', [RandomNumberController::class, 'showHome']);
//Route::get('/prediksi', [PrediksiController::class, 'showPrediksi']);
//Route::get('/home', [HomeController::class, 'showHome']);




//Route::get('/public-first-page', function () {
    //$tanggal = now()->toDateString();
   // return view('public-first-page', compact('tanggal'));
//});
