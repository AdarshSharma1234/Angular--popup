import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookAccountComponent } from './facebook-account/facebook-account.component';

const routes: Routes = [
  {path:'',component:FacebookAccountComponent},
  {path:'',component:FacebookAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
