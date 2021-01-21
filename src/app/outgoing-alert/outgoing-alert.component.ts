import { ComposeComponent } from './../navbar/mailbox/compose/compose.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outgoing-alert',
  templateUrl: './outgoing-alert.component.html',
  styleUrls: ['./outgoing-alert.component.css']
})
export class OutgoingAlertComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl("/allocate-staff");
  }

  onClicked() {
    this.router.navigateByUrl("/request-staff")
  }

  incoming() {
    this.router.navigateByUrl('/alerts')
  }

  compose() {
    this.router.navigateByUrl('/compose')
  }

}
