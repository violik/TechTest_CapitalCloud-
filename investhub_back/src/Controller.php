<?php

namespace App\Controller;

class Controller {

    protected $db;

    public function __construct() {
        $this->db = $GLOBALS['db'];
    }
}
