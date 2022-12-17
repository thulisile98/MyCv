import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificatesComponent } from './cv/certificates.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserLocationComponent } from './user-location/user-location.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'UserLocation',
    pathMatch: 'full'
  },
  {
    path: 'PersonalDetails',
    component: PersonalDetailsComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Certificates',
    component: CertificatesComponent
  },
  {
    path: 'Contacts',
    component: ContactsComponent
  },
  {
    path: 'Portfolio',
    component: PortfolioComponent
  },
  {
    path: 'UserLocation',
    component: UserLocationComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

  ],
  exports: [RouterModule]


})
export class AppRoutingModule { }
