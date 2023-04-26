import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './view/app-layout/app-footer/app-footer.component';
import { AppMenuComponent } from './view/app-layout/app-menu/app-menu.component';
import { AppTopbarComponent } from './view/app-layout/app-topbar/app-topbar.component';
import { AppMenuitemComponent } from './view/app-layout/app-menuitem/app-menuitem.component';
import { AppLayoutComponent } from './view/app-layout/app-layout/app-layout.component';
import { AppBotbarComponent } from './view/app-layout/app-botbar/app-botbar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppTopbarComponent,
    AppMenuitemComponent,
    AppLayoutComponent,
    AppBotbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
