import { SignupService } from './services/signup.service';
import { SigninService } from 'src/app/services/signin.service';
import { SiginInterceptorService } from './login/signin/signin-interceptor.service';


import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navbar/home/home.component';
import { CreateBundobustComponent } from './navbar/create-bundobust/create-bundobust.component';
import { EventsComponent } from './navbar/events/events.component';
import { ViewStaffDetailsComponent } from './navbar/view-staff-details/view-staff-details.component';
import { OtherStaffComponent } from './navbar/other-staff/other-staff.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { OrganizeStaffComponent } from './organize-staff/organize-staff.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { CircleComponent } from './staff/circle/circle.component';
import { SdpoComponent } from './staff/sdpo/sdpo.component';
import { DistrictComponent } from './staff/district/district.component';
import { StateComponent } from './staff/state/state.component';
import { OtherDeparmentsComponent } from './staff/other-deparments/other-deparments.component';
import { PreviewComponent } from './organize-staff/preview/preview.component';
import { CreateAccountComponent } from './navbar/create-account/create-account.component';
import { DutyTicketComponent } from './duty-ticket/duty-ticket.component';
import { GenerateComponent } from './generate/generate.component';
import { PublishDetailsComponent } from './staff/publish-details/publish-details.component';
import { PersonalComponent } from './account/personal/personal.component';
import { PostingComponent } from './account/posting/posting.component';
import { BankingComponent } from './account/banking/banking.component';
import { AddressComponent } from './account/address/address.component';
import { HealthComponent } from './account/health/health.component';
import { PublishComponent } from './account/publish/publish.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { Sdpo1Component } from './otherStaff/sdpo1/sdpo1.component';
import { District1Component } from './otherStaff/district1/district1.component';
import { State1Component } from './otherStaff/state1/state1.component';
import { OtherDepartment1Component } from './otherStaff/other-department1/other-department1.component';
import { AlertsComponent } from './navbar/alerts/alerts.component';
import { RequestStaffComponent } from './navbar/request-staff/request-staff.component';
import { AllocateStaffComponent } from './navbar/allocate-staff/allocate-staff.component';
import { ReportsComponent } from './navbar/reports/reports.component';
import { HistoryComponent } from './navbar/history/history.component';
import { ViewComponent } from './navbar/view/view.component';
import { ComposeComponent } from './navbar/mailbox/compose/compose.component';
import { MailboxComponent } from './navbar/mailbox/mailbox.component';
import { OutgoingMailComponent } from './navbar/mailbox/outgoing-mail/outgoing-mail.component';
import { Circle1Component } from './otherStaff/circle1/circle1.component';
import { OutgoingAlertComponent } from './outgoing-alert/outgoing-alert.component';
import { History1Component } from './history1/history1.component';
import { GaneshBundobustComponent } from './ganesh-bundobust/ganesh-bundobust.component';


/**
 * Author: Dileep.
 */
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AnnexureSHOComponent } from './annexure-sho/annexure-sho.component';
import { PoliceStationComponent } from './police-station/police-station.component';
import { CreateProfileComponent } from './navbar/create-profile/create-profile.component';
import { CreateBundobustCPComponent } from './create-bundobust-cp/create-bundobust-cp.component';
import { HeaderComponent } from './header/header.component';
import { AccountSideNavComponent } from './account/account-side-nav/account-side-nav.component';
import { PsProfileComponent } from './psProfile/ps-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateBundobustComponent,
    EventsComponent,
    ViewStaffDetailsComponent,
    OtherStaffComponent,
    SigninComponent,
    SignupComponent,
    OrganizeStaffComponent,
    ViewReportComponent,
    CircleComponent,
    SdpoComponent,
    DistrictComponent,
    StateComponent,
    OtherDeparmentsComponent,
    PreviewComponent,
    CreateAccountComponent,
    DutyTicketComponent,
    GenerateComponent,
    PublishDetailsComponent,
    PersonalComponent,
    PostingComponent,
    BankingComponent,
    AddressComponent,
    HealthComponent,
    PublishComponent,
    ViewProfileComponent,
    Sdpo1Component,
    District1Component,
    State1Component,
    OtherDepartment1Component,
    AlertsComponent,
    RequestStaffComponent,
    AllocateStaffComponent,
    ReportsComponent,
    HistoryComponent,
    ViewComponent,
    ComposeComponent,
    MailboxComponent,
    OutgoingMailComponent,
    Circle1Component,
    OutgoingAlertComponent,
    History1Component,
    GaneshBundobustComponent,
    AnnexureSHOComponent,
    PoliceStationComponent,
    CreateProfileComponent,
    CreateBundobustCPComponent,
    HeaderComponent,
    AccountSideNavComponent,
    LoadingSpinnerComponent,
    PsProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    /**
     * Author: Dileep.
     */
    PanelMenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    SidebarModule




  ],
  providers: [
    SigninService,
    SignupService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SiginInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
