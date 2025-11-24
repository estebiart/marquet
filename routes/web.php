<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function (Request $request) {


    return app(HomeController::class)->index($request, null);
})->name("Home");