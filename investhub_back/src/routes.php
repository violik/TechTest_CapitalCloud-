<?php

use Slim\App;
use Slim\Exception\HttpNotFoundException;

require_once __DIR__ . '/Controller.php';
/**
 * @param App $app
 */
return function ($app) {
    //Company Routes
    $app = \App\Controller\CompanyController::Routes($app);
    $app = \App\Controller\OfferController::Routes($app);

    //TODO create response handler 404
    
};
