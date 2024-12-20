<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;


Route::get('/', function () {
    return view('welcome');
});


Route::get('/articles', [ArticleController::class, 'index']);
Route::get('/articles/{article}', [ArticleController::class, 'show']);

Route::group(['middleware' => 'cors'], function () {
    Route::get('art', [ArticleController::class, 'index']);
});

