import React from 'react';
import ModaleOffer from './modaleOffer';

interface CompanyCardProps {
  company: DetailsSociete;
  showButton?: boolean;
  fetchOffers: () => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  company,
  showButton,
  fetchOffers,
}) => {
  return (
    <div className='max-w-sm rounded-lg border border-gray-200 shadow-md p-6 bg-white mb-2'>
      <h2 className='text-xl font-semibold text-gray-800'>{company.nom}</h2>
      <p className='text-gray-600 text-sm mt-2'>Secteur: {company.secteur}</p>
      <p className='text-gray-600 text-sm mt-2'>Adresse: {company.adresse}</p>
      <p className='text-gray-600 text-sm mt-2'>
        Capital social: {company.capital_social} €
      </p>
      <p className='text-gray-600 text-sm mt-2'>
        Date de création: {company.date_creation}
      </p>
      <p className='text-gray-600 text-sm mt-2'>
        Nombre de parts: {company.nombre_parts}
      </p>
      <p className='text-gray-600 text-sm mt-2'>
        Valorisation des parts: {company.valorisation} €
      </p>
      {showButton ? (
        <ModaleOffer company={company} fetchOffers={fetchOffers} />
      ) : null}
    </div>
  );
};

export default CompanyCard;
