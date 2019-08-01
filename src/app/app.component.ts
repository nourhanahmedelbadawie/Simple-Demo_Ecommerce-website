import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ShareService } from './share.service';
import { ServicecartService } from './servicecart.service';
import { SearchPipe } from './search.pipe';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/internal/Observable';
import { UploadService } from './uploads/shared/upload.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Upload } from './uploads/shared/upload';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {






  
  title = 'shopping-proj';
  constructor(private service: ShareService,
    private sercart: ServicecartService,
    private httpService: HttpClient,
    private user: UserService,
    private uploadService:UploadService ,
    private afStorage: AngularFireStorage) {
    //update icon cart counter
    this.sercart.observableCount.subscribe((param) => {
      console.log(param);
      this.count = param;

      
    })

  }
 


 
















  pdtsearch: string[]//array to search by name
  downloadURL
  storageRef
  fileName
  imagesRef
  spaceRef
  ngOnInit() {
//get image from user
// / Points to the root reference
 this.storageRef = firebase.storage().ref();

// Points to 'images'
this.imagesRef = this.storageRef.child('uploads');

// Note that you can use variables to create child values
this.fileName = 'gmail.Ppng';
this.spaceRef = this.imagesRef.child(this.fileName);
console.log("mmmmmmmmmmmmmmmmmmmmmmmm")
console.log("mmmmmmmmmmmmmmmmmmmmmmmm"+this.spaceRef)

this.downloadURL=this.afStorage.ref(this.spaceRef).getDownloadURL();

    // ========get the data in json file to search
    this.httpService.get('./assets/products/products.json').subscribe(
      data => {
        this.pdtsearch = data as string[];
        console.log("pdtsearch",this.pdtsearch[1]);

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );


  };








  //state of user

  gethd_profile(){
    if (this.user.signeduser){
      return this.user.signeduser.name
    }
   else{
     return "sign up"
   } 
  }



  //cart counter
  count: number = 0


  //cart icon header
  @ViewChild('menu') el: ElementRef
  dropdownmenu() {
    this.el.nativeElement.style.display = "block"
    this.el.nativeElement.style.visibility="visible"
  }
  dropdownmenudis() {
    this.el.nativeElement.style.display = "none"
  }

//search
@ViewChild('list') list:ElementRef
display(){
this.list.nativeElement.style.visibility="visible"
}
notdisplay(){
  this.list.nativeElement.style.visibility="hidden"
 
}











}
