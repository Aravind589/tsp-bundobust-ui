import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-staff-details',
  templateUrl: './view-staff-details.component.html',
  styleUrls: ['./view-staff-details.component.css']
})
export class ViewStaffDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  view(){
    this.router.navigateByUrl("/view-profile")
  }

  back(){
    this.router.navigateByUrl("/home")
  }

}
