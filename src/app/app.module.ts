import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { PaymenttypeComponent } from './paymenttype/paymenttype.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewcategoryComponent,
    AddcategoryComponent,
    PaymenttypeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
