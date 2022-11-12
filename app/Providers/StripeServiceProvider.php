<?php
namespace App\Providers;
use Illuminate\Support\ServiceProvider;

class StripeServiceProvider extends ServiceProvider {
    public function register() {
        \Stripe\Stripe::setApiKey(env("STRIPE_API_KEY"));
    }

    public function boot() {
    
    }
}
