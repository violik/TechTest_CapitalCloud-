interface Offre {
  id?: string;
  ownerId?: number | string;
  titre: string;
  description: string;
  valeur_part: number;
  nombre_parts: number;
  prix_total: number;
  date_debut_offre: string;
  date_fin_offre: string;
  conditions: string;
  type_offre?: string;
  details_societe?: DetailsSociete;
  contact?: Contact;
  status?: string | 'available' | 'pending' | 'sold' | undefined;
}

interface Offres {
  offres: Offre[];
}
