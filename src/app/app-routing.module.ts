import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { PaymenttypeComponent } from './paymenttype/paymenttype.component';
//import { AddCategoryComponent } from './add-category/add-category.component';
//import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';


const routes: Routes = [
  { path: '', component:ViewcategoryComponent },
  { path: 'view-category', component: ViewcategoryComponent },
  { path: 'add-category', component: AddcategoryComponent},
  { path: 'paymentType', component: PaymenttypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
