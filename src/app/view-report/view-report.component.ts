import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  generate(){
    this.router.navigateByUrl("/generate")
  }

  onClick(){
    this.router.navigateByUrl("/reports")
  }

}
