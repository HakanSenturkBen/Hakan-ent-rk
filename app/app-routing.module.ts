import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForms1Component } from './Product/product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './Product/product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './Product/product/product.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/category/:categoryId',component:ProductComponent},
  {path:'products-add-1',component:ProductAddForms1Component, canActivate:[LoginGuard]},
  {path:'products-add-2',component:ProductAddForms2Component, canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
