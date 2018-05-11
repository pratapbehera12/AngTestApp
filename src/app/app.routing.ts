import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';

import { CatgroupComponent } from './catgroup/catgroup.component';
export const AppRoutes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'catgroup', component: CatgroupComponent }
    
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);