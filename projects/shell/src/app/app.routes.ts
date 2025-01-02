import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard', 
        loadComponent: () => loadRemoteModule('dashboard', './Component').then(m => m.AppComponent)
    },
    {
        path:'social-details', 
        loadComponent: () => loadRemoteModule('social-details', './Component').then(m => m.AppComponent)
    },
    {
        path:'settings', 
        loadComponent: () => loadRemoteModule('settings', './Component').then(m => m.AppComponent)
    }
];
