import { CreatebundobustService } from './../../services/createbundobust.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Bundobustmodel } from './create';

@Component({
  selector: 'app-create-bundobust',
  templateUrl: './create-bundobust.component.html',
  styleUrls: ['./create-bundobust.component.css']
})
export class CreateBundobustComponent implements OnInit {

  uploadForm: FormGroup;
  Bundobustmodel: Bundobustmodel[] = []
  bundobustDetails: any;

  constructor(private _fb: FormBuilder, private router: Router, private service: CreatebundobustService) { }

  ngOnInit(): void {
    this.uploadForm = this._fb.group({
      name: new FormControl('', Validators.required),
      // district: new FormControl('', Validators.required),
      // sdpo: new FormControl('', Validators.required),
      // circle: new FormControl('', Validators.required),
      // policeStation: new FormControl('', Validators.required),
      staffsize: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    });
  }

  back(){
    this.router.navigateByUrl("/home")
  }

  onClick(){
    this.router.navigateByUrl("/events")
  }

  onSubmit(){
    this.bundobustDetails = {
      name: this.uploadForm.get('name').value,
      // district: this.uploadForm.get('district').value,
      // sdpo: this.uploadForm.get('sdpo').value,
      // circle: this.uploadForm.get('circle').value,
      // policeStation: this.uploadForm.get('policeStation').value,
      staffsize: this.uploadForm.get('staffsize').value,
      startDate: this.uploadForm.get('startDate').value,
      endDate: this.uploadForm.get('endDate').value
    }
    this.service.createBundobust(this.bundobustDetails).subscribe(data =>{
      console.log(data);
      (error: any) => console.log(error);
    })
  }
}
