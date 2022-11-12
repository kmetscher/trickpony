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
        $intent = PaymentIntent::create([
            'amount' => 1500,
            'currency' => 'usd',
            'payment_method_types' => ['card'],
        ]);
        $output = [
            'clientSecret' => $intent->client_secret,
        ];
        return (json_encode($output));
    }
}
