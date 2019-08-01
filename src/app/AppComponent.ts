import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ShareService } from './share.service';
import { ServicecartService } from './servicecart.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // img from firbase
  private basePath = '/images';
  file: File;
  url = '';
  title = 'shopping-proj';
  constructor(private service: ShareService,
     private sercart: ServicecartService,
      private httpService: HttpClient, private user: UserService,
      private afStorage: AngularFireStorage,
      private router: Router
       
       
       
       ) {
    //update icon cart counter
    this.sercart.observableCount.subscribe((param) => {
      console.log(param);
      this.count = param;
    });
  }
  pdtsearch: string[]; //array to search by name
  imgurl
  storageRef
  fileName
  imagesRef
  spaceRef
  downloadurl
  fileUploads
  ngOnInit() {
  //====================
    // ========get the data in json file to search
    this.httpService.get('./assets/products/products.json').subscribe(data => {
      this.pdtsearch = data as string[];
      console.log("pdtsearch", this.pdtsearch[1]);
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
//get image of user

this.storageRef = firebase.storage().ref();

// Points to 'images'
this.imagesRef = this.storageRef.child('uploads');

// Note that you can use variables to create child values
this.fileName = 'gmail.png';
this.spaceRef = this.imagesRef.child(this.fileName);


this.imgurl=this.afStorage.ref(this.spaceRef.fullPath).getDownloadURL()

// this.downloadURL=this.afStorage.ref(this.spaceRef.fullPath)
  }
  ;

  //state of user

  x
  gethd_profile() {
    if (localStorage.getItem("auth")==="yes") {
      this.x=JSON.parse(localStorage.getItem("usersArray"))
      return this.x[this.x.length-1].name
    }
    else {
      return "sign up";
    }
  }
  usernavigate(){
    if (localStorage.getItem("auth")==="yes") {
      this.router.navigateByUrl('/cart')
    }
    else{
      this.router.navigateByUrl('/profile')

    }
  }
  //cart counter
  count: number = 0;
  //cart icon header
  @ViewChild('menu')
  el: ElementRef;
  dropdownmenu() {
    this.el.nativeElement.style.display = "block";
  }
  dropdownmenudis() {
    this.el.nativeElement.style.display = "none";
  }
  //search
  @ViewChild('list')
  list: ElementRef;
  display() {
    this.list.nativeElement.style.display = "block";
  }
  notdisplay() {
    this.list.nativeElement.style.display = "none";
  }
}
