import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BookNowComponent } from './book-now/book-now.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from "@angular/forms";
import { IgxStepperModule, IgxMaskModule, IgxInputGroupModule, IgxButtonModule, IgxRadioModule, IgxCardModule, IgxCheckboxModule, IgxSelectModule, IgxIconModule, IgxBadgeModule } from "igniteui-angular";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    BookNowComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxStepperModule,
    IgxMaskModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRadioModule,
    IgxCardModule,
    IgxCheckboxModule,
    IgxSelectModule,
    IgxIconModule,
    IgxBadgeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
