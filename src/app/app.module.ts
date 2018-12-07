import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DecoratorDefaultTestComponent } from './decorator-default-test/decorator-default-test.component';
import { DecoratorLogTestComponent } from './decorator-log-test/decorator-log-test.component';

@NgModule({
  declarations: [
    AppComponent,
    DecoratorDefaultTestComponent,
    DecoratorLogTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
