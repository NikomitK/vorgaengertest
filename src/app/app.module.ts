import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AssedBodyComponent } from './assed-body/assed-body.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { HeaderAboutPageComponent } from './header-about-page/header-about-page.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ServerMenuComponent } from './server-menu/server-menu.component';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    AssedBodyComponent,
    FilterComponent,
    HeaderComponent,
    HeaderAboutPageComponent,
    HomeComponent,
    ItemComponent,
    ItemViewComponent,
    ServerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
