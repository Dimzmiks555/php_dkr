<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('send/email', [App\Http\Controllers\MailController::class, 'mail'])->name('email');
Route::post('create/book', [App\Http\Controllers\BookController::class, 'create'])->name('create_book');
Route::post('add/cart_item', [App\Http\Controllers\CartItemController::class, 'create'])->name('add_cart_item');
Route::post('remove/cart_item', [App\Http\Controllers\CartItemController::class, 'remove'])->name('remove_cart_item');