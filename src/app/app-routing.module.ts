import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'SignUp',
    loadChildren: () => import('./SignUp/SignUp.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'Login',
    loadChildren: () => import('./Login/Login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'SignUp',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
