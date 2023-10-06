const commonAppURI: string = 'http://192.168.11.149:8081/api/';
const commonAuth: string = 'http://localhost:8089/api/auth/';
const domaineUrl: string='localhost:4200'

export const environment = {
  production: false,
  domaine:`${domaineUrl}`,
  recordsPerPage: 20,
  detachementUrl: 'http://192.168.11.149:8081/api',
  circuitUrl:commonAppURI + 'circuit',
  communeUrl: commonAppURI +'communes',
  pieceUrl: commonAppURI +'pieces',
  articleUrl: commonAppURI +'articles',
  corpsUrl: commonAppURI +'corps',
  provinceUrl: commonAppURI +'provinces',
  typesPieceUrl: commonAppURI +'type-pieces',
  typesAssureUrl: commonAppURI +'type-assures',
  resourceUrl: commonAppURI +'taux-forfait-cotisations',
  tauxCotisationUrl: commonAppURI +'taux-forfait-cotisations',
  divisionUrl: commonAppURI +'divisions',
  sectionUrl : commonAppURI +'sections',
  secteurActiviteUrl: commonAppURI +'secteur-activites',
  secteurVillageUrl: commonAppURI +'secteur-villages',
  userUrl: commonAuth +'utilisateurs',
  profilUrl: commonAuth +'profiles',
  privilegeUrl: commonAuth +'privileges',
  authResource: commonAuth +'utilisateurs/signin',
  accountResource: commonAuth +'utilisateurs/validate',
  visaUrl: commonAuth + 'visas',
  motifUrl: commonAuth + 'motifs',
  ministereUrl: commonAuth + 'ministeres',
  ampliationUrl:commonAuth + 'ampliations',
  demandeUrl:commonAppURI + 'demandes',
   // typeEmployeurUrl: commonAppURI +'typeEmployeur',


  //typesCotisationUrl:commonAppCOT+'type-cotisations',
  arrondissementUrl: commonAppURI +'arrondissements',


  //tauxCotisationUrl: commonAppURI +'taux-cotisations',
  // regionUrl: commonAppURI +'regions ',
  // province: commonAppURI +'province ',
  // situationMatrimonial: commonAppURI +'situation-matrimoniale ',
  // affiliation: commonAppURI +'employeurs',
  categorieEmployeurUrl: commonAppURI +'categorieemployeurs',
  // banqueUrl: commonAppURI +'banque ',
  // caisseUrl: commonAppURI +'caisse ',
  // paysUrl: commonAppURI +'pays ',
  // roleUrl: commonAppURI +'role ',
  // typesCotisationUrl:commonAppURI+'types-cotisations',


  formesJuridique: commonAppURI +'formes-juridiques ',
  // situationMatrimonialeUrl: commonAppURI +'situation-matrimoniales ',
  //secteurVillage: commonAppURI +'secteur-villages ',

  regionUrl: commonAppURI +'regions',
  province: commonAppURI +'province',
  banqueUrl: commonAppURI +'banques',

  // caisseUrl: commonAppCOT +'caisses',

  paysUrl: commonAppURI +'pays',
  roleUrl: commonAppURI +'role',


  formesJuridiqueUrl: commonAppURI +'forme-juridiques',
  fournisseurURL: commonAppURI + "fournisseurs",

  situationMatrimonial: commonAppURI +'situation-matrimoniale',
  affiliation: commonAppURI +'employeurs',
  affiliationValider: commonAppURI +'valider',
  tAssureTCotisationUrl: commonAppURI+ 'tassure-tcotisation',

  tAssureTCotisation:commonAppURI+ 'tassure-tcotisation',
  situationMatrimonialeUrl: commonAppURI +'situation-matrimoniales',
  classeUrl: commonAppURI +'classe',
  activiteUrl: commonAppURI +'activites',

  groupeURL: commonAppURI +'groupes',

  entreeSortieUrl: commonAppURI +'entree-sorties',


  typeEmployeurUrl: commonAppURI +'type-employeurs',
  emploiUrl: commonAppURI+'emplois',
  professionUrl: commonAppURI+'professions ',


  //pays: commonAppURI +'pays ',
  region: commonAppURI +'regions',
  //resourceUrl: commonAppURI +'taux-forfait-cotisations',
  //sectionUrl: commonAppURI +'sections',

  assureUrl: commonAppURI +'assures',
  dashbordUrl : commonAppURI+'reports',

  // tauxCotisationUrl: '',
 //  entreeSortieUrl: commonAppURI +'entreeSorties',
  declaration: commonAppURI+ 'declarations',
  employeur: commonAppURI+ 'employeurs',
  tauxByTypeEmployeurUrl: commonAppURI+ 'taux-type-employeur',
  tauxByTypeAssureUrl: commonAppURI+ 'taux-type-assure',
  resourceUploadFile: commonAppURI+ 'file/upload',
  resourceRetrieveFile: commonAppURI+ 'file/recuperer',
  resourceListeAssureByDeclaration: commonAppURI + 'declarations-Assure',
  typeActeGeneratedUrl: commonAppURI + 'type-actes-generes',
  signataireUrl: commonAppURI + 'signataires',

  // === reporting, statistiques === //
  reportingUrl: commonAppURI +'reports'

};
/****** */
