import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'verification', loadChildren: './verification/verification.module#VerificationPageModule' },
  { path: 'personalinfo', loadChildren: './personalinfo/personalinfo.module#PersonalinfoPageModule' },
  { path: 'dashborad', loadChildren: './dashborad/dashborad.module#DashboradPageModule' },  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
