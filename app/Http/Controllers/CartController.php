<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class CartController extends Controller {
    public function fetch(Request $request) {
        $withPrices = [];
        $subtotal = 0;
        $cartItems = $request->input();
        foreach ($cartItems as $index => $item) {
            $query = Product::where('id', '=', $item["id"])
                ->get("price", "local")->first();
            $price = $query->price;
            $local = $query->local;
            $thumb = Product::where('id', '=', $item["id"])
                ->pluck("image")->first();
            $subtotal += $price;
            $item['price'] = $price;
            $item['local'] = (bool)$local;
            $item['thumb'] = $thumb;
            $withPrices[] = $item;
        }
        return Inertia::render('Cart', [
            'cartItems' => $withPrices,
            'subtotal' => $subtotal,
        ]);
    }
    public function viewCart() {
        return Inertia::render('CartLoading');
    }
}
