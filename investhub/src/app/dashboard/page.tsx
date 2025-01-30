'use client';

import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import CardOffer from '@/components/ux/cardOffer';
import CompanyCard from '@/components/ux/companyCard';
import CardPreview from '@/components/ux/previewCardOffer';
import offers from '@/db/offres.json';
import companies from '@/db/companies.json';
import { useEffect, useState } from 'react';
import { APICompany } from '@/api/companyApi';
import { APIOffers } from '@/api/offersApi';
import { useSearchParams } from 'next/navigation';
export default function Page() {
  const userId = useSearchParams().get('userId') ?? '1';

  const [offersToDisplay, setOffersToDisplay] = useState<Offre[]>([]);
  const [acquisitionProposalToDisplay, setAcquisitionProposalToDisplay] =
    useState<Offre[]>([]);
  const [companiesToDisplay, setCompaniesToDisplay] = useState<
    DetailsSociete[]
  >([]);

  const fetchOffers = () => {
    APIOffers.getAvailableOffers().then(data => {
      setOffersToDisplay(data);
    });

    APICompany.getCompanies().then(data => {
      setCompaniesToDisplay(data);
    });

    APIOffers.getMyOffers(userId.toString()).then(data => {
      setAcquisitionProposalToDisplay(data);
    });
  };

  useEffect(() => {
    // TODO call api
    fetchOffers();
  }, [userId]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <div className='aspect-video rounded-xl bg-muted/50'>
              <h3 className='m-auto text-center'>Mes actifs</h3>
              <div className='overflow-scroll max-h-[600px]'>
                {companiesToDisplay &&
                  companiesToDisplay.map(c => (
                    <CompanyCard
                      key={c.nom}
                      company={c}
                      showButton={true}
                      fetchOffers={fetchOffers}
                    />
                  ))}
              </div>
            </div>
            <div className='aspect-video rounded-xl bg-muted/50 '>
              <h3 className='m-auto text-center'>Mes offres en cours</h3>
              <div className='overflow-scroll max-h-[600px]'>
                {offersToDisplay &&
                  offersToDisplay.map(offre =>
                    offre.ownerId == userId ? (
                      <CardPreview
                        key={offre.id}
                        offre={offre}
                        displayStatus
                        displayAgreement
                      />
                    ) : null
                  )}
              </div>
            </div>
            <div className='aspect-video rounded-xl bg-muted/50'>
              <h3 className='m-auto text-center'>Demandes d'acquisition</h3>
              <div className='overflow-scroll max-h-[600px]'>
                {acquisitionProposalToDisplay &&
                  acquisitionProposalToDisplay.map(offre => (
                    <CardPreview key={offre.id} offre={offre} displayStatus />
                  ))}
              </div>
            </div>
          </div>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min w-full'>
            {offersToDisplay.map((offer, key) => {
              return <CardOffer offre={offer} key={key} />;
            })}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
