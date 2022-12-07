import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolComponent } from './component/tool/tool.component';
import { SearchAreaComponent } from './component/search-area/search-area.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchOptionsBarComponent } from './components/search-options-bar/search-options-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    SearchAreaComponent,
    HeaderComponent,
    SearchOptionsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
