import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organize-staff',
  templateUrl: './organize-staff.component.html',
  styleUrls: ['./organize-staff.component.css']
})
export class OrganizeStaffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(){
    this.router.navigateByUrl("/circle")
  }

  duty(){
    this.router.navigateByUrl("/duty-ticket")
  }

  // onClick(){
  //   this.router.navigateByUrl("/preview")
  // }

}
