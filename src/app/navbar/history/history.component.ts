import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  activeEvents(){
    this.router.navigateByUrl("/events")
  }

  report(){
    this.router.navigateByUrl("/view-report")
  }

}
