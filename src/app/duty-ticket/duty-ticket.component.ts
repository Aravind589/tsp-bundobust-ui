import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duty-ticket',
  templateUrl: './duty-ticket.component.html',
  styleUrls: ['./duty-ticket.component.css']
})
export class DutyTicketComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl("/organize-staff")
  }

}
