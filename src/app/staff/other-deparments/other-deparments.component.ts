import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-deparments',
  templateUrl: './other-deparments.component.html',
  styleUrls: ['./other-deparments.component.css']
})
export class OtherDeparmentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl("/state")
  }

  next() {
    this.router.navigateByUrl("/publish-details")
  }

  onClick(){
    this.router.navigateByUrl("/publish-details")
  }

}
