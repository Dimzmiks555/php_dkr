<?php

use App\Http\Controllers\ProfileController;
use App\Models\Book;
use App\Models\CartItem;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {


    $books = Book::latest()->get();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'books' => $books
    ]);
})->name('home');

Route::get('/dashboard', function () {

    $books = Book::latest()->get();

    return Inertia::render('Dashboard', [
        'books' => $books
    ]);

})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/create_book', function () {
    return Inertia::render('CreateBook');
})->middleware(['auth', 'verified'])->name('create_book');


Route::get('/cart', function () {

    $books = CartItem::with('book')->get();


    return Inertia::render('Cart', [
        'books' => $books
    ]);
})->name('cart');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
