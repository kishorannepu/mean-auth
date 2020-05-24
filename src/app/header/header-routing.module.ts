import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path:'',component:NavComponent,
   children:[
  //   {,pathMatch: 'prefix'
  //     path: '', pathMatch: 'full', redirectTo: 'header/register'
  //   },
  {path:'',loadChildren: () => import(`../register/register.module`).then(m => m.RegisterModule) },
  {path:'login',loadChildren: () => import('../login/login.module').then(m=>m.LoginModule)},
 
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
