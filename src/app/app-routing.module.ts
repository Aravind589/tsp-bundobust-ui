import { History1Component } from './history1/history1.component';
import { Circle1Component } from './otherStaff/circle1/circle1.component';
import { HistoryComponent } from './navbar/history/history.component';
import { ReportsComponent } from './navbar/reports/reports.component';
import { AlertsComponent } from './navbar/alerts/alerts.component';
import { AllocateStaffComponent } from './navbar/allocate-staff/allocate-staff.component';
import { RequestStaffComponent } from './navbar/request-staff/request-staff.component';
import { OtherDepartment1Component } from './otherStaff/other-department1/other-department1.component';
import { District1Component } from './otherStaff/district1/district1.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { PublishComponent } from './account/publish/publish.component';
import { HealthComponent } from './account/health/health.component';
import { AddressComponent } from './account/address/address.component';
import { BankingComponent } from './account/banking/banking.component';
import { PostingComponent } from './account/posting/posting.component';
import { PersonalComponent } from './account/personal/personal.component';
import { PublishDetailsComponent } from './staff/publish-details/publish-details.component';
import { StateComponent } from './staff/state/state.component';
import { DistrictComponent } from './staff/district/district.component';
import { SdpoComponent } from './staff/sdpo/sdpo.component';
import { CircleComponent } from './staff/circle/circle.component';
import { GenerateComponent } from './generate/generate.component';
import { DutyTicketComponent } from './duty-ticket/duty-ticket.component';
import { PreviewComponent } from './organize-staff/preview/preview.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { OrganizeStaffComponent } from './organize-staff/organize-staff.component';
import { SignupComponent } from './login/signup/signup.component';
import { OtherStaffComponent } from './navbar/other-staff/other-staff.component';
import { SigninComponent } from './login/signin/signin.component';
import { ViewStaffDetailsComponent } from './navbar/view-staff-details/view-staff-details.component';
import { EventsComponent } from './navbar/events/events.component';
import { CreateBundobustComponent } from './navbar/create-bundobust/create-bundobust.component';
import { HomeComponent } from './navbar/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './navbar/create-account/create-account.component';
import { OtherDeparmentsComponent } from './staff/other-deparments/other-deparments.component';
import { Sdpo1Component } from './otherStaff/sdpo1/sdpo1.component';
import { State1Component } from './otherStaff/state1/state1.component';
import { ViewComponent } from './navbar/view/view.component';
import { ComposeComponent } from './navbar/mailbox/compose/compose.component';
import { OutgoingMailComponent } from './navbar/mailbox/outgoing-mail/outgoing-mail.component';
import { MailboxComponent } from './navbar/mailbox/mailbox.component';
import { OutgoingAlertComponent } from './outgoing-alert/outgoing-alert.component';
import { GaneshBundobustComponent } from './ganesh-bundobust/ganesh-bundobust.component';
import { AnnexureSHOComponent } from './annexure-sho/annexure-sho.component';
import { PoliceStationComponent } from './police-station/police-station.component';
import { CreateProfileComponent } from './navbar/create-profile/create-profile.component';
import { CreateBundobustCPComponent } from './create-bundobust-cp/create-bundobust-cp.component';
import { HeaderComponent } from './header/header.component';
import { AccountSideNavComponent } from './account/account-side-nav/account-side-nav.component';
import { SigninGuard } from './login/signin/signin.guard';
import { PsProfileComponent } from './psProfile/ps-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  //, canActivate: [SigninGuard]
  { path: 'signup', component: SignupComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'posting', component: PostingComponent },
  { path: 'banking', component: BankingComponent },
  { path: 'address', component: AddressComponent },
  { path: 'health', component: HealthComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'create-bundobust', component: CreateBundobustComponent },
  { path: 'events', component: EventsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'request-staff', component: RequestStaffComponent },
  { path: 'allocate-staff', component: AllocateStaffComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'view', component: ViewComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'view-staff-details', component: ViewStaffDetailsComponent },
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'generate', component: GenerateComponent },
  { path: 'duty-ticket', component: DutyTicketComponent },
  { path: 'other-staff', component: OtherStaffComponent },
  { path: 'circle1', component: Circle1Component },
  { path: 'sdpo1', component: Sdpo1Component },
  { path: 'district1', component: District1Component },
  { path: 'state1', component: State1Component },
  { path: 'other-department1', component: OtherDepartment1Component },
  { path: 'organize-staff', component: OrganizeStaffComponent },
  { path: 'circle', component: CircleComponent },
  { path: 'sdpo', component: SdpoComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'state', component: StateComponent },
  { path: 'other-deparments', component: OtherDeparmentsComponent },
  { path: 'publish-details', component: PublishDetailsComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'view-report', component: ViewReportComponent },
  { path: 'compose', component: ComposeComponent },
  { path: 'mailbox', component: MailboxComponent },
  { path: 'outgoing-mail', component: OutgoingMailComponent },
  { path: 'outgoing-alert', component: OutgoingAlertComponent },
  { path: 'history1', component: History1Component },
  { path: 'ganeshBundobust', component: GaneshBundobustComponent },
  { path: 'annexure-sho', component: AnnexureSHOComponent },
  { path: 'policeStation', component: PoliceStationComponent },
  { path: 'create-bundobust-CP', component: CreateBundobustCPComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'account-side-nav', component: AccountSideNavComponent },
  { path: 'ps-profile', component: PsProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
