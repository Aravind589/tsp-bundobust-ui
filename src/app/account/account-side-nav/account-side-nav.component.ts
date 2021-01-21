import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-side-nav',
  templateUrl: './account-side-nav.component.html',
  styleUrls: ['./account-side-nav.component.css']
})
export class AccountSideNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
