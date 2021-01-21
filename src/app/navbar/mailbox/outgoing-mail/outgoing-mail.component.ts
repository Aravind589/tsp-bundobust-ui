import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outgoing-mail',
  templateUrl: './outgoing-mail.component.html',
  styleUrls: ['./outgoing-mail.component.css']
})
export class OutgoingMailComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  incomingMail(){
    this.router.navigateByUrl("/mailbox")
  }

  outgoingMail(){
    this.router.navigateByUrl("/outgoingMail")
  }

  compose(){
    this.router.navigateByUrl("/compose")
  }

}
