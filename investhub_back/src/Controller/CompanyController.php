<?php

namespace App\Controller;

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;

use App\Controller\Controller;

class CompanyController extends Controller {
    /**
     * @param App $app
     * @return App $app
     */
    public static function Routes($app) {
        $app->post('/company', CompanyController::class . ':addCompany')
            ->setName('addCompany');

        $app->get('/companies', CompanyController::class . ':getCompanies')
            ->setName('getCompanies');

        $app->get('/company/{id}', CompanyController::class . ':getCompanyById')
            ->setName('getCompanyById');

        $app->put('/company/{id}', CompanyController::class . ':updateCompany')
            ->setName('updateCompany');
            
        return $app;
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response $response
     */
    public function addCompany($request, $response) {
        $data = $request->getParsedBody();
        $message = $this->db->addCompany($data);
        $response->getBody()->write($message);
        return $response;
        //return $response->withJSON(['status' => true], 200);
       
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response $response
     */
    public function getCompanies($request, $response) {
        // TODO modify and split to handle ownership in a better way
        $data = $request->getParsedBody();
        $companies = $this->db->getCompanies($data);
        $response->getBody()->write(json_encode($companies, JSON_PRETTY_PRINT));
        return $response;
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response $response
     */
    public function getCompanyById($request, $response, $args) {
        $company = $this->db->getCompanyById($args['id']);
        $response->getBody()->write(json_encode($company, JSON_PRETTY_PRINT));
        return $response;
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response $response
     */
    public function updateCompany($request, $response, $args) {
        $data = $request->getParsedBody();

        $company = $this->db->updateCompany($args['id'], $data);
        $response->getBody()->write(json_encode($company, JSON_PRETTY_PRINT));
        return $response;
    }

}
