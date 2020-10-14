import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allocate-staff',
  templateUrl: './allocate-staff.component.html',
  styleUrls: ['./allocate-staff.component.css']
})
export class AllocateStaffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl("/alerts")
  }

}
