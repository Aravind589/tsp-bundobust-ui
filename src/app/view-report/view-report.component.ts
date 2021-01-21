import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

   items: MenuItem[];
  visibleSidebar1;
  Table1: boolean = false;
  Table2: boolean = false;
  Table3: boolean = false;
  Table4: boolean = false;
  Table5: boolean = false;

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
