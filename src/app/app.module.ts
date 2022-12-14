import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CertificatesComponent } from './cv/certificates.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    AboutComponent,
    PortfolioComponent,
    ContactsComponent,
    CertificatesComponent,
    UserLocationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
