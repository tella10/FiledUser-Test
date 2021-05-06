import { AppComponent } from './app.component';

import { AppRoutingModule} from './route.routing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { StoreModule } from '@ngrx/store';
import { UserModule } from './user/user.module'

import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './user/user-data';



@NgModule({
  declarations: [			
    AppComponent,
   ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(UserData),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
