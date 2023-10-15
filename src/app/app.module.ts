import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LoadingComponent} from './core/loading/loading.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotificationListComponent} from "@feel/notification";

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NotificationListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
