import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAreaComponent } from './component/search-area/search-area.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchOptionsBarComponent } from './component/search-options-bar/search-options-bar.component';
import { SelectMediaTypeComponent } from './component/select-media-type/select-media-type.component';
import { SelectOperationTypeComponent } from './component/select-operation-type/select-operation-type.component';
import { FrontPageComponent } from './component/front-page/front-page.component';
import { SpecificServicesComponent } from './component/specific-services/specific-services.component';
import { TagDisplayComponent } from './component/tagsAndSearch/tag-display/tag-display.component';
import { SearchByWordComponent } from './component/tagsAndSearch/search-by-word/search-by-word.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchAreaComponent,
    SearchOptionsBarComponent,
    HeaderComponent,
    SelectMediaTypeComponent,
    SelectOperationTypeComponent,
    FrontPageComponent,
    SpecificServicesComponent,
    TagDisplayComponent,
    SearchByWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
