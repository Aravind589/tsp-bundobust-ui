import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history1',
  templateUrl: './history1.component.html',
  styleUrls: ['./history1.component.css']
})
export class History1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  active(){
    this.router.navigateByUrl("/reports")
  }

}
