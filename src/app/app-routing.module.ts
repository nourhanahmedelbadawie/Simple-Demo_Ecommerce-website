import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from "./AppComponent";
import { ProductComponent } from './product/product.component';
import { UploadFormComponent } from "./uploads/upload-form/UploadFormComponent";

const routes: Routes = [{
  path: '',redirectTo:'home',pathMatch:'full'
},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'profile',component:UploadFormComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
