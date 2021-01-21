import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-details',
  templateUrl: './publish-details.component.html',
  styleUrls: ['./publish-details.component.css']
})
export class PublishDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl("/view-report")
  }
}
