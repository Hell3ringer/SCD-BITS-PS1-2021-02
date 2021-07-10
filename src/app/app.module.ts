import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceMasterComponent } from './menubar/deviceMaster/device.component';
import { energyOEMMasterComponent } from './menubar/energyOEMMaster/energyOEM.component';
import { gatewayMasterComponent } from './menubar/gatewayMaster/gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceMasterComponent,
    gatewayMasterComponent,
    energyOEMMasterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
