import { CitydetailComponent } from './citydetail/citydetail.component';
import { CityComponent } from './city/city.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
                          {path:'city',component:CityComponent},
                          {path:'city/:id',component:CitydetailComponent},
                          {path:'detail',component:CitydetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
