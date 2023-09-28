export enum Authority {
    ADMIN = 'ADMIN',
    USER = 'USER',
    ADD_PROFILE = 'ADD_PROFILE',
    VIEW_PROFILE = 'VIEW_PROFILE',
    DELETE_PROFILE = 'DELETE_PROFILE',
    ADD_USER = 'ADD_USER',
    VIEW_USER = 'VIEW_USER',
    ADD_ACTIVITE = 'ADD_ACTIVITE',
    EDIT_ACTIVITE = 'EDIT_ACTIVITE',
    VIEW_ACTIVITE = 'VIEW_ACTIVITE',
    DELETE_ACTIVITE = 'DELETE_ACTIVITE',
    ADD_ARRONDISSEMENT = 'ADD_ARRONDISSEMENT',
    EDIT_ARRONDISSEMENT = 'EDIT_ARRONDISSEMENT',
    VIEW_ARRONDISSEMENT = 'VIEW_ARRONDISSEMENT',
    DELETE_ARRONDISSEMENT = 'DELETE_ARRONDISSEMENT',
    ADD_ASSURE = 'ADD_ASSURE',
    EDIT_ASSURE = 'EDIT_ASSURE',
    VIEW_ASSURE = 'VIEW_ASSURE',
    DELETE_ASSURE = 'DELETE_ASSURE',
    PRINT_RECEP_ASSURE = 'PRINT_RECEP_ASSURE',
    VALID_REJET_ASSURE = 'VALID_REJET_ASSURE',
    ADD_CARTE = 'ADD_CARTE',
    EDIT_CARTE = 'EDIT_CARTE',
    VIEW_CARTE = 'VIEW_CARTE',
    DELETE_CARTE = 'DELETE_CARTE',
    GEN_CARTE = 'GEN_CARTE',
    PRINT_CARTE = 'PRINT_CARTE',
    ADD_COMMUNE = 'ADD_COMMUNE',
    VIEW_COMMUNE ='VIEW_COMMUNE',
    EDIT_COMMUNE = 'EDIT_COMMUNE',
    DELETE_COMMUNE = 'DELETE_COMMUNE',
    ADD_DECLARATION	= 'ADD_DECLARATION',
	EDIT_DECLARATION	= 'EDIT_DECLARATION',
	VIEW_DECLARATION	= 'VIEW_DECLARATION',
	DELETE_DECLARATION	= 'DELETE_DECLARATION',
	ADD_DIVISION	= 'ADD_DIVISION',
	  EDIT_DIVISION = 'EDIT_DIVISION',
	  VIEW_DIVISION	= 'VIEW_DIVISION',
	  DELETE_DIVISION	= 'DELETE_DIVISION',
	  ADD_EMPLOI	= 'ADD_EMPLOI',
	  EDIT_EMPLOI	= 'EDIT_EMPLOI',
	  VIEW_EMPLOI	= 'VIEW_EMPLOI',
	  DELETE_EMPLOI	= 'DELETE_EMPLOI',
	  ADD_EMPLOYEUR	= 'ADD_EMPLOYEUR',
	  EDIT_EMPLOYEUR	= 'EDIT_EMPLOYEUR',
	  VALID_REJET_EMPLOYEUR	= 'VALID_REJET_EMPLOYEUR',
	  VIEW_EMPLOYEUR	= 'VIEW_EMPLOYEUR',
	  DELETE_EMPLOYEUR	= 'DELETE_EMPLOYEUR',
	  PRINT_EMPLOYEUR	= 'PRINT_EMPLOYEUR',
	  ADD_ES	= 'ADD_ES',
	  EDIT_ES	= 'EDIT_ES',
	  VIEW_ES	= 'VIEW_ES',
	  DELETE_ES	= 'DELETE_ES',
	  ADD_FJ	= 'ADD_FJ',
	  EDIT_FJ	= 'EDIT_FJ',
	  VIEW_FJ	= 'VIEW_FJ',
	  DELETE_FJ	= 'DELETE_FJ',
	  ADD_GROUPE	= 'ADD_GROUPE',
	  EDIT_GROUPE = 'EDIT_GROUPE',
	  VIEW_GROUPE	= 'VIEW_GROUPE',
	  DELETE_GROUPE	= 'DELETE_GROUPE',
	  ADD_PAYS	= 'ADD_PAYS',
	  EDIT_PAYS	= 'EDIT_PAYS',
	  VIEW_PAYS	= 'VIEW_PAYS',
	  DELETE_PAYS = 'DELETE_PAYS',
	  ADD_PHOTO	= 'ADD_PHOTO',
	  EDIT_PHOTO = 'EDIT_PHOTO',
	  VIEW_PHOTO	= 'VIEW_PHOTO',
	  DELETE_PHOTO	= 'DELETE_PHOTO',
	  ADD_PIECE	=  'ADD_PIECE',
	  EDIT_PIECE = 'EDIT_PIECE',
	  VIEW_PIECE	= 'VIEW_PIECE',
	  DELETE_PIECE = 'DELETE_PIECE',
	  ADD_PROFESSION = 'ADD_PROFESSION',
	  EDIT_PROFESSION	= 'EDIT_PROFESSION',
	  VIEW_PROFESSION	='VIEW_PROFESSION',
	  DELETE_PROFESSION	= 'DELETE_PROFESSION',
	  ADD_PROVINCE	='ADD_PROVINCE',
	  EDIT_PROVINCE = 'EDIT_PROVINCE',
	  VIEW_PROVINCE	= 'VIEW_PROVINCE',
	  DELETE_PROVINCE	= 'DELETE_PROVINCE',
	  ADD_REGION	= 'ADD_REGION',
	  EDIT_REGION	= 'EDIT_REGION',
	  DELETE_REGION	= 'DELETE_REGION',
	  VIEW_REGION	= 'VIEW_REGION',
	  VIEW_REPORT	= 'VIEW_REPORT',
	  ADD_SECT_VILL	= 'ADD_SECT_VILL',
	  EDIT_SECT_VILL	= 'EDIT_SECT_VILL',
	  VIEW_SECT_VILL = 'VIEW_SECT_VILL',	
	  DELETE_SECT_VILL	= 'DELETE_SECT_VILL',
	  ADD_SECTION	= 'ADD_SECTION',
	  EDIT_SECTION	= 'EDIT_SECTION',
	  VIEW_SECTION	= 'VIEW_SECTION',
	  DELETE_SECTION	= 'DELETE_SECTION',
	  ADD_SERVEUR	= 'ADD_SERVEUR',
	  EDIT_SERVEUR	= 'EDIT_SERVEUR',
	  VIEW_SERVEUR	= 'VIEW_SERVEUR',
	  DELETE_SERVEUR	= 'DELETE_SERVEUR',
	  ADD_TFC	= 'ADD_TFC',
	  EDIT_TFC	= 'EDIT_TFC',
	  VIEW_TFC	= 'VIEW_TFC',
	  DELETE_TFC	= 'DELETE_TFC',
	  ADD_TYPE_ASSURE	= 'ADD_TYPE_ASSURE',
	  EDIT_TYPE_ASSURE	= 'EDIT_TYPE_ASSURE',
	  VIEW_TYPE_ASSURE	= 'VIEW_TYPE_ASSURE',
	  DELETE_TYPE_ASSURE	= 'DELETE_TYPE_ASSURE',
	  ADD_TYPE_EMPLOYEUR	= 'ADD_TYPE_EMPLOYEUR',
	  EDIT_TYPE_EMPLOYEUR	= 'EDIT_TYPE_EMPLOYEUR',
	  VIEW_TYPE_EMPLOYEUR	= 'VIEW_TYPE_EMPLOYEUR',
	  DELETE_TYPE_EMPLOYEUR	= 'DELETE_TYPE_EMPLOYEUR',
	  ADD_TYPE_PIECE	= 'ADD_TYPE_PIECE',
	  EDIT_TYPE_PIECE	= 'EDIT_TYPE_PIECE',
	  VIEW_TYPE_PIECE	= 'VIEW_TYPE_PIECE',
	  DELETE_TYPE_PIECE	= 'DELETE_TYPE_PIECE',
	  ADD_FINGER	= 'ADD_FINGER',
	  EDIT_FINGER	= 'EDIT_FINGER',
	  VIEW_FINGER	= 'VIEW_FINGER',
	  ADD_BANQUE	= 'ADD_BANQUE',
	  EDIT_BANQUE	= 'EDIT_BANQUE',
	  VIEW_BANQUE	= 'VIEW_BANQUE',
	  DELETE_BANQUE	= 'DELETE_BANQUE',
	  ADD_CAISSE	= 'ADD_CAISSE',
	  EDIT_CAISSE	= 'EDIT_CAISSE',
	  VIEW_CAISSE	= 'VIEW_CAISSE',
	  DELETE_CAISSE	= 'DELETE_CAISSE',
	  ADD_TYPE_COTISATION	= 'ADD_TYPE_COTISATION',
	  EDIT_TYPE_COTISATION	= 'EDIT_TYPE_COTISATION',
	  VIEW_TYPE_COTISATION	= 'VIEW_TYPE_COTISATION',
	  DELETE_TYPE_COTISATION	= 'DELETE_TYPE_COTISATION',
	  ADD_COTISATION	= 'ADD_COTISATION',
      EDIT_COTISATION	= 'EDIT_COTISATION',
	  VIEW_COTISATION	= 'VIEW_COTISATION',
	  DELETE_COTISATION = 'DELETE_COTISATION',
  } 
  