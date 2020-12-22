import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { authInterceptorProvider } from '@panng-stream-demo/auth/util';
import { DemoShellModule } from '@panng-stream-demo/shell';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, DemoShellModule, GraphQLModule],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
