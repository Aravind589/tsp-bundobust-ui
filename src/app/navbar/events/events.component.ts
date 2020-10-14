import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  report(){
    this.router.navigateByUrl("/view-report")
  }

  depolyStaff(){
    this.router.navigateByUrl("/organize-staff")
  }

  requestStaff(){
    this.router.navigateByUrl("/request-staff")
  }

  onClick(){
    this.router.navigateByUrl("/home")
  }

  history(){
    this.router.navigateByUrl("/history")
  }

}
