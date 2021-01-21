import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bundobust-cp',
  templateUrl: './create-bundobust-cp.component.html',
  styleUrls: ['./create-bundobust-cp.component.css']
})
export class CreateBundobustCPComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl("/alerts")
  }

}
