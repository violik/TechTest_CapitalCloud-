import { Button } from '../ui/button';

interface CardPreviewProps {
  offre: Offre;
  displayStatus?: boolean;
  displayAgreement?: boolean;
}

const CardPreview: React.FC<CardPreviewProps> = ({
  offre,
  displayStatus,
  displayAgreement,
}) => {
  return (
    <div className='flex items-center bg-white rounded-lg shadow-md border border-gray-200 p-4 space-x-4 mb-2'>
      <div className='flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md'></div>
      <div className='flex-1'>
        <h3 className='text-lg font-semibold text-gray-800'>{offre.titre}</h3>
        <p className='text-gray-600 text-sm mt-2'>{offre.description}</p>
        <div className='mt-4'>
          <p className='text-sm text-gray-600'>
            Prix total: {offre.prix_total} €
          </p>
          <div>{displayStatus ? <>Status : {offre.status}</> : null}</div>
          <div>
            {displayAgreement && offre.status == 'pending' ? (
              <Button> Accepter l'offre</Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
