import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  okay() {
    this.router.navigateByUrl("/view-staff-details")
  }

}
