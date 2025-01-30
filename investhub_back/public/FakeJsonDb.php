<?php

class FakeJsonDb {
    private $dbFile;
    private $data;

    public function __construct($dbFile = 'db.json') {
        $this->dbFile = $dbFile;

        // Load data from the JSON file
        $this->loadData();
    }

    private function loadData() {
        if (file_exists($this->dbFile)) {
            $json = file_get_contents($this->dbFile);
            $this->data = json_decode($json, true);
        } else {
            // If the file doesn't exist, create a new empty structure
            $this->data = ['companies' => [], 'offres' => []];
            $this->saveData();
        }
    }

    private function saveData() {
        // Save the data back to the JSON file
        file_put_contents($this->dbFile, json_encode($this->data, JSON_PRETTY_PRINT));
    }

    public function getCompanies($data = null) {
        if(empty($data)) return $this->data['companies'];
        $ownerId = $data;
        $res = [];
        foreach ($this->data['companies'] as $company) {
            if ($company['ownerId'] == $ownerId) {
                $res[] =  $company;
            }
        }
        return $res;
    }

    public function addCompany($company) {
        $this->data['companies'][] = $company;
        $this->saveData();
    }

    public function getCompanyById($id) {
        foreach ($this->data['companies'] as $company) {
            if ($company['id'] == $id) {
                return $company;
            }
        }
        return null; // Return null if company not found
    }

    public function updateCompany($id, $updatedData) {
        // Find the company by ID
        foreach ($this->data['companies'] as &$company) {
            if ($company['id'] == $id) {
                // Update the company data with the new values
                $company = array_merge($company, $updatedData);
                $this->saveData();
                return $company; // Return company to indicate success
            }
        }
        return false; // Return false if company not found
    }


    /* Offers */

    public function getOffers($data = null) {
        if(empty($data)) return $this->data['offres'];
        $ownerId = $data;
        $res = [];
        foreach ($this->data['offres'] as $offer) {
            if ($offer['ownerId'] == $ownerId) {
                $res[] =  $offer;
            }
        }
        return $res;
    }

    public function addOffer($offer) {
        $offer['status'] = 'available';
        $offer['id'] = count($this->getOffers()) +1;
        $this->data['offres'][] = $offer;
        $this->saveData();
    }

    public function getOfferById($id) {
        foreach ($this->data['offres'] as $offer) {
            if ($offer['id'] == $id) {
                return $offer;
            }
        }
        return null; // Return null if offer not found
    }

    public function updateOffer($id, $updatedData) {
        // Find the company by ID
        foreach ($this->data['offres'] as &$offer) {
            if ($offer['id'] == $id) {
                // Update the company data with the new values
                $offer = array_merge($offer, $updatedData);
                $this->saveData();
                return $offer; // Return offer to indicate success
            }
        }
        return false; // Return false if offer not found
    }
}
