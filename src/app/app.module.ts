import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ApiService, JwtService } from './shared/index';
import { AppRoutes } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignListComponent } from './campaign/campaign-list/campaign-list.component';
import { CampaignPageComponent } from './campaign/campaign-page/campaign-page.component';
import { CampaignService } from './shared/service/campaign.service';
import { CampaignDetailComponent } from './campaign/campaign-detail/campaign-detail.component';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CampaignListComponent,
    CampaignPageComponent,
    CampaignDetailComponent,
    CampaignFormComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutes
  ],
  providers: [
    ApiService,
    JwtService,
    CampaignService
  ],
  bootstrap: [
    AppComponent

  ]
})
export class AppModule { }
