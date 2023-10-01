const commonAppURI: string = 'http://localhost:8090/api/';
const commonAuth: string = 'http://localhost:8089/api/auth/';


export const environment = {
    production: false,
    recordsPerPage: 20,
    detachementUrl: 'http://localhost:8080/api',

    communeUrl: commonAppURI + 'communes',
    pieceUrl: commonAppURI + 'pieces',
    articleUrl: commonAppURI + 'articles',
    corpsUrl: commonAppURI + 'corps',
    typesPieceUrl: commonAppURI + 'type-pieces',
    visaUrl: commonAuth + 'visas',
    motifUrl: commonAuth + 'motifs',
    ministereUrl: commonAuth + 'ministeres',
    ampliationUrl: commonAuth + 'ampliations',
    demandeUrl: commonAuth + 'demandes',
    userUrl: commonAuth + 'utilisateurs',
    profilUrl: commonAuth + 'profiles',
    privilegeUrl: commonAuth + 'privileges',
    authResource: commonAuth + 'utilisateurs/signin',
    accountResource: commonAuth + 'utilisateurs/validate',
    dashbordUrl: commonAppURI + 'reports',

};
/****** */
