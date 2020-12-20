import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoShellModule } from '@panng-stream/demo/shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DemoShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
