<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class CartController extends Controller {

    public function viewCart() {
        return Inertia::render('Cart');
    }
    
}
