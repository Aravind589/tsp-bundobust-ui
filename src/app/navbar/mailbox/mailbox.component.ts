import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  incomingMail(){
    this.router.navigateByUrl("/mailbox")
  }

  outgoingMail(){
    this.router.navigateByUrl("/outgoing-mail")
  }

  compose(){
    this.router.navigateByUrl("/compose")
  }

}
