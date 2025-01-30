<!-- 

namespace App\Controller;

use App\Entity\Company;
use Doctrine\ORM\EntityManagerInterface;

class CompanyController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function createCompany($data)
    {
        $company = new Company($data['nom'], $data['secteur'], $data['adresse'], $data['capital_social'], $data['date_creation']);
        $this->entityManager->persist($company);
        $this->entityManager->flush();

        return "Company created with ID: " . $company->getId();
    }

    public function getAllCompanies()
    {
        $companies = $this->entityManager->getRepository(Company::class)->findAll();
        return json_encode($companies);
    }

    public function getCompany($id)
    {
        $company = $this->entityManager->find(Company::class, $id);
        if (!$company) {
            return "Company not found!";
        }
        return json_encode($company);
    }

    public function updateCompany($id, $data)
    {
        $company = $this->entityManager->find(Company::class, $id);
        if (!$company) {
            return "Company not found!";
        }

        $company->setNom($data['nom']);
        $company->setSecteur($data['secteur']);
        $company->setAdresse($data['adresse']);
        $company->setCapitalSocial($data['capital_social']);
        $company->setDateCreation($data['date_creation']);

        $this->entityManager->flush();

        return "Company updated!";
    }

    public function deleteCompany($id)
    {
        $company = $this->entityManager->find(Company::class, $id);
        if (!$company) {
            return "Company not found!";
        }

        $this->entityManager->remove($company);
        $this->entityManager->flush();

        return "Company deleted!";
    }
}
 -->