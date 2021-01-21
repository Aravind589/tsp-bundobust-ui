import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigateByUrl("/personal")
  }

}
