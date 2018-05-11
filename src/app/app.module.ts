import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CatgroupComponent } from './catgroup/catgroup.component';
import { ConfigService } from './service/config.service';
import { IApiService } from './service/iapi.service';
import { ApiService } from './service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatgroupComponent
      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  bootstrap: [AppComponent],
  providers: [
    ConfigService,
    { provide: IApiService, useClass: ApiService}
    
] 
  
})
export class AppModule { }
