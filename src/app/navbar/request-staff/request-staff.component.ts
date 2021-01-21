import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-staff',
  templateUrl: './request-staff.component.html',
  styleUrls: ['./request-staff.component.css']
})
export class RequestStaffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl("/events")
  }

}
