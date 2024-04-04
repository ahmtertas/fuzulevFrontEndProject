import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateComponent } from './components/real-estate/real-estate.component';

const routes: Routes = [
  {path:"realestates/:all", component:RealEstateComponent},
  {path:"realestates/title/:titleName", component:RealEstateComponent},
  {path:"realestates/orderby/:ordertype", component:RealEstateComponent},
  {path:"realestates/fromWho/:from", component:RealEstateComponent},
  {path:"realestates/top/:top", component:RealEstateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
