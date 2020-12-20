import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { authInterceptorProvider } from '@panng-stream-demo/auth/data-access';
import { DemoShellModule } from '@panng-stream-demo/shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, DemoShellModule],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
