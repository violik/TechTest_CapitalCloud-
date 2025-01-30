'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import CompanyCard from './companyCard';
import { APIOffers } from '@/api/offersApi';
import { useSearchParams } from 'next/navigation';

interface ModaleOfferProps {
  company: DetailsSociete;
  fetchOffers: () => void;
}

const ModaleOffer: React.FC<ModaleOfferProps> = ({ company, fetchOffers }) => {
  const [offer, setOffer] = useState({
    ownerId: useSearchParams().get('userId') ?? '1',
    titre: '',
    description: '',
    valeur_part: 0,
    nombre_parts: 0,
    prix_total: 0,
    date_debut_offre: '',
    date_fin_offre: '',
    conditions: '',
  });
  // TODO error handling (ex: shares must be inferior as owned ones)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOffer((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const postOffer = () => {
    APIOffers.addOffer({ ...offer, details_societe: company }).then(
      fetchOffers
    );
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='m-3'>Publier une offre</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[1425px] overflow-scroll max-h-[80%] p-6'>
        <DialogHeader>
          <DialogTitle>Publier une offre</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-2 items-center gap-1 py-4'>
          <CompanyCard company={company} fetchOffers={fetchOffers} />
          <div className=''>
            {/* Offer Title */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='titre' className='text-right'>
                Offer Title
              </Label>
              <Input
                id='titre'
                name='titre'
                value={offer.titre}
                onChange={handleChange}
                className='col-span-3 mb-1'
              />
            </div>

            {/* Offer Description */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Input
                id='description'
                name='description'
                value={offer.description}
                onChange={handleChange}
                className='col-span-3 mb-1'
              />
            </div>

            {/* Offer Value Per Share */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='valeur_part' className='text-right'>
                Value Per Share
              </Label>
              <Input
                id='valeur_part'
                name='valeur_part'
                type='number'
                value={offer.valeur_part}
                onChange={handleChange}
                className='col-span-3 mb-1'
              />
            </div>

            {/* Number of Shares */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='nombre_parts' className='text-right'>
                Number of Shares
              </Label>
              <Input
                id='nombre_parts'
                name='nombre_parts'
                type='number'
                value={offer.nombre_parts}
                onChange={handleChange}
                max={company.nombre_parts}
                min={0}
                className='col-span-3 mb-1'
              />
            </div>

            {/* Total Price */}
            {
              // TODO auto calculate price
            }
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='prix_total' className='text-right'>
                Total Price
              </Label>
              <Input
                id='prix_total'
                name='prix_total'
                type='number'
                value={offer.prix_total}
                onChange={handleChange}
                className='col-span-3 mb-1'
              />
            </div>

            {/* Offer Start Date */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='date_debut_offre' className='text-right'>
                Start Date
              </Label>
              <Input
                id='date_debut_offre'
                name='date_debut_offre'
                type='date'
                value={offer.date_debut_offre}
                onChange={handleChange}
                className='col-span-3 mb-1'
              />
            </div>

            {/* Offer End Date */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='date_fin_offre' className='text-right'>
                End Date
              </Label>
              <Input
                id='date_fin_offre'
                name='date_fin_offre'
                type='date'
                value={offer.date_fin_offre}
                onChange={handleChange}
                className='col-span-3 mb-1'
              />
            </div>

            {/* Conditions */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='conditions' className='text-right'>
                Conditions
              </Label>
              <Input
                id='conditions'
                name='conditions'
                value={offer.conditions}
                onChange={handleChange}
                className='col-span-3 mb-1'
              />
            </div>

            {/* User & Company Fields */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input
                id='name'
                value='Pedro Duarte'
                className='col-span-3 mb-1'
                disabled
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input
                id='username'
                value='@peduarte'
                className='col-span-3 mb-1'
                disabled
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type='submit' onClick={() => postOffer()}>
              Publier l'offre
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModaleOffer;
