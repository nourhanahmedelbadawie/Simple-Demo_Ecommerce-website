import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { ShareService } from 'src/app/share.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent  {
  progress: {
    percentage: number;
  } = { percentage: 0 };
  selectedFiles: FileList;
  currentUpload: Upload;
  currentFileUpload;
  myForm: FormGroup;
  Userslogin;




  constructor(private upSvc: UploadService,
     private service: ShareService, 

    private router: Router, private userser: UserService,
     private formBuilder: FormBuilder) { }
  registerForm;
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
      pass: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]),
      confirmpass: new FormControl('', [Validators.required])
    });
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: this.MustMatch('password', 'confirmPassword')
      });
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
    };
  }
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  user: {};
  @ViewChild('confirm_msg')
  el:ElementRef;
  @ViewChild('length_msg')
  el2:ElementRef;
  @ViewChild('empty_name')
  emptyname:ElementRef;
  @ViewChild('empty_pass')
  emptypass: ElementRef;
  @ViewChild('empty_email')
  emptyemail:ElementRef;
  //form
  onSubmit(form: FormGroup) {
    // img Upload
    if(!this.selectedFiles){
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'you must choose an image !',
        footer: ''
      })
      return
    }
    if (this.selectedFiles[0]) {
     
      const file = this.selectedFiles[0];
      this.currentFileUpload = new Upload(file);
      this.upSvc.pushFileToStorage(this.currentFileUpload, this.progress);
    }
   
  
   
    this.user = {};
    //display empty error
    if (!form.value.pass || form.value.email || form.value.name) {
      if (!form.value.pass) {
        this.emptypass.nativeElement.style.display = "block";
        alert("1")
        return;
      }
      if (!form.value.name) {
        this.emptyname.nativeElement.style.display = "block";
        alert("2")

        return;
      }
      if (!form.value.email) {
        this.emptyemail.nativeElement.style.display = "block";
        alert("3")

        return;
      }

      ;
    }
    // display msg_error
    if (form.value.pass != form.value.confirmpass) {
      this.el.nativeElement.style.display = "block";
      return;
    }
    else if (form.value.pass.length < 6 && form.value.pass.length >= 1 || form.value.pass.length > 12) {
      this.el2.nativeElement.style.display = "block";
      return;
    }
    //to saving arr users
    this.user = {
      name: form.value.name,
      email: form.value.email,
      pass: form.value.pass,
    };
    console.log("user", this.user);
    this.get_Userslogin(this.user);
    this.userser.changeuserstae(this.user); //cahnge state of user in home page
    this.router.navigateByUrl('/home');
  }
  //array savng users
  newitem
  usersArray:[]=[]
  get_Userslogin(person) {
    localStorage.setItem("auth","yes")
  this.usersArray.push(person)
    console.log(person)
      localStorage.setItem("usersArray", JSON.stringify(  this.usersArray   ));
  
  }
  
  //////img upload
  public imagePath;
  imgURL: any;
  public message: string;
  detectFiles(event, files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
    this.selectedFiles = event.target.files;
  }
 
}
