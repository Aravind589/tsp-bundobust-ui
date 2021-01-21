import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-department1',
  templateUrl: './other-department1.component.html',
  styleUrls: ['./other-department1.component.css']
})
export class OtherDepartment1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl("/home")
  }

}
