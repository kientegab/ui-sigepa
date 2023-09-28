
export class IGlobalStats { 

    /**
	 * la catégorie de l'employeur
	 */
	categorie?: string;
	
	/**
	 * date de début de la période
	 */
	debut?: Date;
	
	/**
	 * date limite de la période
	 */
	fin?: Date;
	
	/**
	 * Id de la forme juridique
	 * 
	 * facultatif
	 */
	formeJuridique?: number;
	
	/**
	 * statut des affiliations recherchées :
	 * 
	 * à TRUE veut dire celles qui sont validées sont recherchées
	 * 
	 * et vice versa
	 */
	statut?: boolean;
	
	/**
	 * Id de la région concernée
	 */
	region?: number;
	
	/**
	 * Id de la province concernée: cette valeur
	 * 
	 * n'est renseignée que lorsque celle de la region
	 * 
	 * est fournie
	 */
	province?: number;

	/**
	 * 
	 */
	commune?: number;

	/**
	 * 
	 */
	arrondissement?: number;

	/**
	 * 
	 */
	secteurVillage?: number;
	
	/**
	 * Id du valideur, permettant de savoir pour une utilisateur donné
	 * 
	 * quelles sont les affiliations validées sur une période données
	 *  
	 */
	validateur?: number;
	
	/**
	 * Id du type assuré
	 */
	typeAssureId?: number;
	
	/**
	 * précise le genre (sexe) des assurés concernés par la recherche
	 */
	genre?: string;
	
	/**
	 * Id de l'employeur de l'assuré
	 */
	employeurId?: number;

	/**
	 * Id du typeEmployeur
	 */
	typeEmployeurId?: number;
	
	/**
	 * mode de paiement pour la recherche de la cotisation
	 */
	modePaiement?: string; 
	
	/**
	 * modalité de paiement pour la recherche de la cotisation
	 */
	modalitePaiement?: string;
	
	/**
	 * Id de l'assuré concernée par la recherche de la cotisation
	 */
	assureId?: number;
	
	/**
	 * Id de la caisse concernée par la recherche de la cotisation
	 */
	caisseId?: number;
	
	/**
	 * Id du type de cotisation recherché
	 */
	typeCotisationId?: number;
}

export class GlobalStats implements IGlobalStats{
    constructor(
        public categorie?: string,
        public debut?: Date, 
        public fin?: Date, 
        public formeJuridique?: number, 
        public statut?: boolean, 
        public region?: number, 
        public province?: number, 
		public commune?: number,
		public arrondissement?: number,
		public secteurVillage?: number,
        public validateur?: number, 
        public typeAssureId?: number, 
        public genre?: string, 
        public employeurId?: number,
		public typeEmployeurId?: number, 
        public modePaiement?: string,  
        public modalitePaiement?: string, 
        public assureId?: number, 
        public caisseId?: number, 
        public typeCotisationId?: number
    ){
        
    }
} 