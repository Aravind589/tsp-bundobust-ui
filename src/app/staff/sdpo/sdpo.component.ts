import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sdpo',
  templateUrl: './sdpo.component.html',
  styleUrls: ['./sdpo.component.css']
})
export class SdpoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl("/circle")
  }

  next(){
    this.router.navigateByUrl("/district")
  }

}
