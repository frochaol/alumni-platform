import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((c) => c.Landing),
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros').then((c) => c.Nosotros),
  },
  {
    path: 'elecciones',
    loadComponent: () => import('./pages/elecciones/elecciones').then((c) => c.Elecciones),
  },
  {
    path: 'campeonatos',
    loadComponent: () => import('./pages/campeonatos/campeonatos').then((c) => c.Campeonatos),
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/proyectos/proyectos').then((c) => c.Proyectos),
  },
  {
    path: 'comunidad',
    loadComponent: () => import('./pages/comunidad/comunidad').then((c) => c.Comunidad),
  },
  {
    path: 'estatutos',
    loadComponent: () => import('./pages/estatutos/estatutos').then((c) => c.Estatutos),
  },
];
