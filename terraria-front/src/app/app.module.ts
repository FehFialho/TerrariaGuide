import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesPageComponent } from './features/main-page/classes-page/classes-page.component';
import { BossesPageComponent } from './features/main-page/bosses-page/bosses-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainPageComponent } from './features/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesPageComponent,
    BossesPageComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
