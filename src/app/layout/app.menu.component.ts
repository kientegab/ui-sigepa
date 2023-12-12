import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/service/auth.service';
import { MenuItem } from 'primeng/api';
import { Authority } from '../shared/constants/authority.constants';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[] = [];
    constructor(
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
        this.model = [
            {
               // label: 'Dashboard',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Tableau de bord',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/admin']
                    },

                    {
                        label: 'Statistiques',
                        icon: 'pi pi-fw pi-chart-line',
                       // visible: this.authService.checkPermission([Authority.ADMIN], AuthenticationService.privileges),
                        items: [
                            {
                                label: 'detachement',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/stat-demandes']
                            },
                            {
                                label: 'disponibilité',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/stat-demandes']
                            },
                        ]
                    },
                    {
                        label: 'Utilisateur',
                        icon: 'pi pi-lock',
                        //visible: this.authService.checkPermission([Authority.ADMIN, Authority.VIEW_USER], AuthenticationService.privileges),
                        items: [
                        ]
                    },
                    {
                        label: 'Détachements',
                        icon: 'pi pi-lock',
                        //visible: this.authService.checkPermission([Authority.ADMIN, Authority.VIEW_USER], AuthenticationService.privileges),
                        items: [
                            
                            {
                                label: 'Mes demandes',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/detachements']
                            },
                            
                            {
                                label: 'Demandes agents',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/detachements/agents']
                            },
                            
                        ]
                    },
                    {
                        label: 'Disponilités',
                        icon: 'pi pi-lock',
                        //visible: this.authService.checkPermission([Authority.ADMIN, Authority.VIEW_USER], AuthenticationService.privileges),
                        items: [
                        
                            {
                                label: 'Mes demandes',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/disponibilites']
                            },
                            
                            {
                                label: 'Demandes agents',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/disponibilites/agents']
                            },
                            // {
                            //     label: 'Creation demande',
                            //     icon: 'pi pi-fw pi-eye-slash',
                            //     routerLink: ['/disponibilites/creation']
                            // }
                        ]
                    },
                    {
                        label: 'Paramètres',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                                    {
                                        label: 'Circuit',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/circuit']
                                    },
                                    {   label: 'Structure',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/structures']
                                    },
                                    {
                                        label: 'Type Structure',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/type-structures']
                                    },
                                    {
                                        label: 'Type Demande',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/type-demandes']
                                    },

                                    {
                                        label: 'visa',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/visas']
                                    },
                                    {
                                        label: 'ministere',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/ministeres']
                                    },
                                    {
                                        label: 'Profil',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/profils']
                                    },
                                    {
                                        label: 'motif',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/motifs']
                                    },
                                    {
                                        label: 'ampliations',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/ampliations']
                                    },

                                    {
                                        label: 'Pieces',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/pieces']
                                    },
                                    {
                                        label: 'Articles',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/articles']
                                    },
                                    {
                                        label: 'Corps',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/corps']
                                    },

                                    {
                                        label: 'Agents',
                                        icon: 'pi pi-fw pi-eye-slash',
                                        routerLink: ['/admin/agents']
                                    }

                                ]
                            },
                        ]
                    },

                ]
    }
}
