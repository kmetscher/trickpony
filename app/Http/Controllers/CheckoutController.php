<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Stripe\PaymentIntent;
use Stripe\StripeClient;

class CheckoutController extends Controller {
    private function calculate($cart) {
        foreach ($cart as $item) {
        
        }
    }
    public function checkout(Request $request) {
        return ("howdy");
    }
}
