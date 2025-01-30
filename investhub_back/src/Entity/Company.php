<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="companies")
 */
class Company
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $secteur;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresse;

    /**
     * @ORM\Column(type="integer")
     */
    private $capital_social;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date_creation;

    public function __construct($nom, $secteur, $adresse, $capital_social, $date_creation)
    {
        $this->nom = $nom;
        $this->secteur = $secteur;
        $this->adresse = $adresse;
        $this->capital_social = $capital_social;
        $this->date_creation = new \DateTime($date_creation);
    }

    public function getId()
    {
        return $this->id;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function getSecteur()
    {
        return $this->secteur;
    }

    public function getAdresse()
    {
        return $this->adresse;
    }

    public function getCapitalSocial()
    {
        return $this->capital_social;
    }

    public function getDateCreation()
    {
        return $this->date_creation;
    }
}
