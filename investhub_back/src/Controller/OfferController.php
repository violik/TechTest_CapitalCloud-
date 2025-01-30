<?php

namespace App\Controller;

use Slim\App;
use Slim\Http\Response;

use App\Controller\Controller;
use Psr\Http\Message\ServerRequestInterface;

class OfferController extends Controller {
    /**
     * @param App $app
     * @return App $app
     */
    public static function Routes($app) {
        $app->post('/offer', OfferController::class . ':addOffer')
            ->setName('addOffer');

        $app->get('/offers', OfferController::class . ':getOffers')
            ->setName('getOffers');

        $app->get('/offers/{ownerId}', OfferController::class . ':getOffersByUserId')
            ->setName('getOffersByUserId');
            
        return $app;
    }

    /**
    * @param Request $request
    * @param Response $response
    * @return Response $response
    */
    public function addOffer(ServerRequestInterface $request, $response) {
        $data = $request->getParsedBody();
        $message = $this->db->addOffer($data);
        $response->getBody()->write(json_encode($message, JSON_PRETTY_PRINT));
        return $response;       
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response $response
     */
    public function getOffers($request, $response) {
        // TODO modify and split to handle non ownership
        $companies = $this->db->getOffers();
        $response->getBody()->write(json_encode($companies, JSON_PRETTY_PRINT));
        return $response;
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response $response
     */
    public function getOffersByUserId($request, $response, $args) {
        // TODO modify and split to handle ownership in a better way
        $companies = $this->db->getOffers($args['ownerId']);
        $response->getBody()->write(json_encode($companies, JSON_PRETTY_PRINT));
        return $response;
    }

    /**
     * @param Request $request
     * @param Response $response
     * @return Response $response
     */
    public function updateOffer($request, $response, $args) {
        $data = $request->getParsedBody();

        $company = $this->db->updateOffer($args['id'], ['status' => $data]);
        $response->getBody()->write(json_encode($company, JSON_PRETTY_PRINT));
        return $response;
    }

}
