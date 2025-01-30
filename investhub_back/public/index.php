<?php


use Slim\Factory\AppFactory;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Slim\Exception\HttpNotFoundException;
use Slim\Middleware\ErrorMiddleware;
use Slim\Psr7\Response;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config/doctrine.php';


//Cors
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header(
        'Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization'
    );
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
}


require_once 'FakeJsonDb.php';

// Create a new FakeJsonDb instance
$db = new FakeJsonDb();

// Instantiate app
$app = AppFactory::create();

// Register routes
$routes = require __DIR__ . '/../src/routes.php';
$routes($app);

// Parse json, form data and xml
$app->addBodyParsingMiddleware();
// handle 404
$app->map(['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], '/{routes:.+}', function (
    $request
) {
    throw new HttpNotFoundException($request);
});



    // Catch exceptions and errors
    //$app->add(ErrorMiddleware::class);

// Run app
$app->run();

/* 
$app->get('/', function (Request $request, Response $response) {
    $response->getBody()->write('<a href="/hello/world">Try /hello/world</a>');
    return $response;
});

$app->post('/company', function (Request $request, Response $response, $args) {
    $data = $request->getParsedBody();
    $message = $GLOBALS['db']->addCompany($data);
    $response->getBody()->write($message);
    return $response;
});

$app->get('/companies', function (Request $request, Response $response, $args) {
    //$controller = new CompanyController($GLOBALS['entityManager']);
    $companies = $GLOBALS['db']->getCompanies();
    $response->getBody()->write(json_encode($companies, JSON_PRETTY_PRINT));
    return $response;
});

$app->get('/company/{id}', function (Request $request, Response $response, $args) {
    $company = $GLOBALS['db']->getCompanyById($args['id']);
    $response->getBody()->write(json_encode($company, JSON_PRETTY_PRINT));
    return $response;
});

$app->put('/company/{id}', function (Request $request, Response $response, $args) {
    $data = $request->getParsedBody();
    $message = $GLOBALS['db']->updateCompany($args['id'], $data);
    $response->getBody()->write($message);
    return $response;
});

$app->delete('/company/{id}', function (Request $request, Response $response, $args) {
    $controller = new CompanyController($GLOBALS['entityManager']);
    $message = $controller->deleteCompany($args['id']);
    $response->getBody()->write($message);
    return $response;
}); */