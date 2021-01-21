import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  generate(){
    this.router.navigateByUrl("/view-report")
  }

  history(){
    this.router.navigateByUrl("/history1")
  }

}
