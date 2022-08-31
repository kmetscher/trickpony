<?php
namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\Thumb;
use App\Models\ProductOption;
use App\Models\Option;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ProductController extends Controller {
    private function getThumbs($productID) {
        /* Returns a string array of thumbnail URIs from the relational
         * database given an integer product ID. For use with Carousel */
        return Thumb::where('product-id', '=', $productID)
            ->pluck('thumb-uri')->toArray();
    }
    private function getOptions($productID) {
        /* Retrieves the associated table of product values in the database
         * given a product ID and returns a two-deep array, with the name of 
         * the customization option as its index, and an array of key-value pairs 
         * as its value. */
        $productOptions = ProductOption::where('product-id', '=', $productID)
            ->get(); // Get the available options
        foreach ($productOptions as $option) { // For each option,
            $optionValues = DB::table($option->values_table)
                ->select('name', 'value')->get(); // Retrieve the table of possible values
            foreach ($optionValues as $nameValue) {
                $valuesArray[] = ['name' => $nameValue->name, 'value' => $nameValue->value];
            } // Organize them as [Option => [Name => Value], ..., Option => [Name => Value]]
            $options[$option->name] = $valuesArray;
            $valuesArray = []; // Clear the options array for the next pass
        }
        // I know this is O(n^2) but I'm tired right now.
        return $options;
    }
    public function viewProduct($productName) {
        $product = Product::where('permalink', '=', $productName)->first();
        $thumbs = $this->getThumbs($product->id);
        $options = $this->getOptions($product->id);
        //return "<pre>".print_r($options, true)."</pre>";
        return Inertia::render('ViewProduct', [
            'product' => $product,
            'thumbs' => $thumbs,
            'options' => $options,
        ]);
    }
}
