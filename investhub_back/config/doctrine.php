<?php

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;
use Doctrine\DBAL\DriverManager;

require_once __DIR__ . '/../vendor/autoload.php';

// Database connection configuration
$dbParams = [
    'driver' => 'pdo_mysql',
    'host' => getenv('DB_HOST'),
    'dbname' => getenv('DB_NAME'),
    'user' => getenv('DB_USER'),
    'password' => getenv('DB_PASS'),
];

$config = ORMSetup::createAttributeMetadataConfiguration(
    [__DIR__ . "/../src/Entity"], // paths to entities
    true // dev mode
);
$connection = DriverManager::getConnection($dbParams, $config);
$entityManager = new EntityManager($connection, $config);
return $entityManager;
