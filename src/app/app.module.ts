import {  NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    NgxAnimatedCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  

  
}
