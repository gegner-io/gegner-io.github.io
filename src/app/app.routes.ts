import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
	},
	{
		path: 'impressum',
		loadComponent: () =>
			import('./pages/impressum-page/impressum-page.component').then((m) => m.ImpressumPageComponent),
	},
	{
		path: 'datenschutz',
		loadComponent: () =>
			import('./pages/datenschutz-page/datenschutz-page.component').then((m) => m.DatenschutzPageComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
