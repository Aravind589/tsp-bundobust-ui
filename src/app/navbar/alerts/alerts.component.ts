import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl("/allocate-staff");
  }

  onClicked() {
    this.router.navigateByUrl("/request-staff")
  }

  compose() {
    this.router.navigateByUrl("/compose")
  }

  outgoing() {
    this.router.navigateByUrl("/outgoing-alert")
  }

}
