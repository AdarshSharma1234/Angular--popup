import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { FacebookAccountComponent } from './facebook-account/facebook-account.component';

const routes: Routes = [
  {path:'',component:FacebookAccountComponent},
  {path:'facebook-account',component:FacebookAccountComponent},
  {path:'carousel',component:CarouselComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
