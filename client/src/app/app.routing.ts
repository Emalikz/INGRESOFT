import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const appRoutes:Routes = [
  {
    path: 'auth',
    loadChildren: ()=>
      import('./auth/auth.module').then(
        (m)=> m.AuthModule
      )
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {}
