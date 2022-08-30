<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;

Route::get('/', [IndexController::class, 'index'])->name('index');

Route::get('/categories/{categoryName}', 
    [CategoryController::class, 'viewCategory'])
    ->name('category');

Route::get('/product/{productName}',
    [ProductController::class, 'viewProduct'])
    ->name('product');

Route::get('/cart',
    [CartController::class, 'viewCart'])
    ->name('cart.view');

Route::post('/cart',
    [CartController::class, 'fetch'])
    ->name('cart.fetch');