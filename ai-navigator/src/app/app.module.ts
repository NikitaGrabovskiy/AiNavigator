import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAreaComponent } from './component/search-area/search-area.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchOptionsBarComponent } from './component/search-options-bar/search-options-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAreaComponent,
    SearchOptionsBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
