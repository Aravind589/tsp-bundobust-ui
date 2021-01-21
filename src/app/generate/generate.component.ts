import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  
  submit() {
    this.router.navigateByUrl("/view-report")
  }
   

}
