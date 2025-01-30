'use client';

import React from 'react';
import { Button } from '../ui/button';
import { useSearchParams } from 'next/navigation';

interface cardOfferProps {
  offre: Offre;
}
const CardOffer: React.FC<cardOfferProps> = ({ offre }) => {
  const userId = useSearchParams().get('userId') ?? '1';
  return (
    <div className='max-w-full rounded-lg border border-gray-200 shadow-md p-4 bg-white'>
      <h2 className='text-xl font-semibold text-gray-800'>{offre.titre}</h2>
      <p className='text-gray-600 mt-2'>{offre.description}</p>

      <div className='mt-4'>
        <h3 className='text-lg font-medium text-gray-700'>
          Détails de l offre
        </h3>
        <p className='text-sm text-gray-600'>
          Valeur de la part: {offre.valeur_part} €
        </p>
        <p className='text-sm text-gray-600'>
          Nombre de parts: {offre.nombre_parts}
        </p>
        <p className='text-sm text-gray-600'>
          Prix total: {offre.prix_total} €
        </p>
        <p className='text-sm text-gray-600'>
          Période de l offre: {offre.date_debut_offre} - {offre.date_fin_offre}
        </p>
      </div>

      <div className='mt-4'>
        <h3 className='text-lg font-medium text-gray-700'>Société</h3>
        <p className='text-sm text-gray-600'>
          Nom: {offre.details_societe?.nom}
        </p>
        <p className='text-sm text-gray-600'>
          Secteur: {offre.details_societe?.secteur}
        </p>
        <p className='text-sm text-gray-600'>
          Adresse: {offre.details_societe?.adresse}
        </p>
        <p className='text-sm text-gray-600'>
          Capital social: {offre.details_societe?.capital_social} €
        </p>
        <p className='text-sm text-gray-600'>
          Date de création: {offre.details_societe?.date_creation}
        </p>
      </div>

      <div className='mt-4'>
        <h3 className='text-lg font-medium text-gray-700'>Conditions</h3>
        <ul className='list-disc pl-5'>
          {offre.conditions.split('.').map((condition, index) => (
            <li key={index} className='text-sm text-gray-600'>
              {condition}
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-4'>
        <h3 className='text-lg font-medium text-gray-700'>Contact</h3>
        <p className='text-sm text-gray-600'>Nom: {offre.contact?.nom}</p>
        <p className='text-sm text-gray-600'>Email: {offre.contact?.email}</p>
        <p className='text-sm text-gray-600'>
          Téléphone: {offre.contact?.telephone}
        </p>
      </div>

      <div className='mt-4'>
        {offre.status == 'available' && userId != offre.ownerId ? (
          <Button>Faire une offre</Button>
        ) : // TODO on click create offer to change state
        null}
      </div>
    </div>
  );
};

export default CardOffer;
