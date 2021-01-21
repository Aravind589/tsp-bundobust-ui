import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-police-station',
  templateUrl: './police-station.component.html',
  styleUrls: ['./police-station.component.css']
})
export class PoliceStationComponent implements OnInit {

  constructor(private router: Router) { }

  sectors:boolean=true;
  sensitivePickets:boolean=false;
  hyperSensitivePickets:boolean=false;
  immersionPoints:boolean=false;
  mobileParties:boolean=false;
  patrolcars:boolean=false;
  blueColts:boolean= false; 



  ngOnInit(): void {
  }

  Sectors(){
    this.sectors=true;
    this.sensitivePickets=false;
    this.hyperSensitivePickets=false;
    this.immersionPoints=false;
    this.mobileParties=false;
    this.patrolcars=false;
    this.blueColts=false;
    
  }
  SensitivePickets(){
    this.sectors=false;
    this.sensitivePickets=true;
    this.hyperSensitivePickets=false;
    this.immersionPoints=false;
    this.mobileParties=false;
    this.patrolcars=false;
    this.blueColts=false;
  }
  HyperSensitivePickets(){
    this.sectors=false;
    this.sensitivePickets=false;
    this.hyperSensitivePickets=true;
    this.immersionPoints=false;
    this.mobileParties=false;
    this.patrolcars=false;
    this.blueColts=false;
  }
  ImmersionPoints(){
    this.sectors=false;
    this.sensitivePickets=false;
    this.hyperSensitivePickets=false;
    this.immersionPoints=true;
    this.mobileParties=false;
    this.patrolcars=false;
    this.blueColts=false;
  }
  MobileParties(){
    this.sectors=false;
    this.sensitivePickets=false;
    this.hyperSensitivePickets=false;
    this.immersionPoints=false;
    this.mobileParties=true;
    this.patrolcars=false;
    this.blueColts=false;
  }
  Patrolcars(){

    this.sectors=false;
    this.sensitivePickets=false;
    this.hyperSensitivePickets=false;
    this.immersionPoints=false;
    this.mobileParties=false;
    this.patrolcars=true;
    this.blueColts=false;
  }
  BlueColts(){
    this.sectors=false;
    this.sensitivePickets=false;
    this.hyperSensitivePickets=false;
    this.immersionPoints=false;
    this.mobileParties=false;
    this.patrolcars=false;
    this.blueColts=true;
  }

  onNext(){
    this.router.navigateByUrl("/create-profile")
  }
}
