<?php
namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\Thumb;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductController extends Controller {
    private function getThumbs($productID) {
        return Thumb::where('product-id', '=', $productID)
            ->pluck('thumb-uri')->toArray();
    }
    public function viewProduct($productName) {
        $product = Product::where('permalink', '=', $productName)->first();
        $thumbs = $this->getThumbs($product->id);
        return Inertia::render('ViewProduct', [
            'product' => $product,
            'thumbs' => $thumbs,
        ]);
    }
}
