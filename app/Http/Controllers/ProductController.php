<?php
namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\Thumb;
use App\Models\ProductOption;
use App\Models\Option;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductController extends Controller {
    private function getThumbs($productID) {
        /* Returns a string array of thumbnail URIs from the relational
         * database given an integer product ID. For use with Carousel */
        return Thumb::where('product-id', '=', $productID)
            ->pluck('thumb-uri')->toArray();
    }
    private function getOptions($productID) {
        /* Returns an associative array of option names and possible
         * values given an integer product ID. For use with Cart operations */
        $productOptions = ProductOption::where('product-id', '=', $productID)
            ->get();
        foreach ($productOptions as $option) {
            $options = Option::where('option-id', '=', $option->id)->get();
            $optionsArray[$option->name] = $options;
        }
        return $optionsArray;
    }
    public function viewProduct($productName) {
        $product = Product::where('permalink', '=', $productName)->first();
        $thumbs = $this->getThumbs($product->id);
        $options = $this->getOptions($product->id);
        return Inertia::render('ViewProduct', [
            'product' => $product,
            'thumbs' => $thumbs,
            'options' => $options,
        ]);
    }
}
