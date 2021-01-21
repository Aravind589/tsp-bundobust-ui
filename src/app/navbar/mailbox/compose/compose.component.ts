import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.router.navigateByUrl("/mailbox")
  }

}
