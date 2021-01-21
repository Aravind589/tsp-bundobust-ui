import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewprofileService } from '../services/viewprofile.service'

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  // posts;

  constructor(private service: ViewprofileService, private router: Router) { }

  ngOnInit(): void {
    // this.service.getPosts().subscribe(response => {
    //   this.posts = response;
    // });
  }

  // deleteItem(post){
  //   this.service.deletePost(post.id).subscribe(response => {
  //     this.posts = this.posts.filter(item => item.id !== post.id);
  //   });
  // }
  onClick(){
    this.router.navigateByUrl("/policeStation")
  }
}
