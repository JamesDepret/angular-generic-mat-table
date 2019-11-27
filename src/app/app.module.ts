import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';

import { AppComponent } from './app.component';
import { GeneralTableComponent } from '../shared/general-table/general-table.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
   ],
  declarations: [ AppComponent, GeneralTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
