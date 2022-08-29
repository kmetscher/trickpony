<?php
namespace App\Http\Controllers;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CategoryController extends Controller {
    public function viewCategory($categoryName) {
        switch ($categoryName) {
            case 'toysandgames':
                $categoryID = 1;
                $categoryTitle = 'Toys and Games';
                break;
            case 'homeandoffice':
                $categoryID = 2;
                $categoryTitle = 'Home and Office';
                break;
            case 'furnishings':
                $categoryID = 3;
                $categoryTitle = 'Furnishings';
                break;
            default:
                $categoryID = 1; // fix me
                break;
        }
        $products = Product::where('category', '=', $categoryID)
            ->get();
        return Inertia::render('ViewCategory', [
            'products' => $products,
            'category' => $categoryTitle,
        ]);
    }
}
