<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Product;

class IndexController extends Controller {
    public function index() {
        return Inertia::render('Home', []);
    }
}
