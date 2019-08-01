import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
   }
signeduser:any
  changeuserstae(ele){
this.signeduser=ele
  }



}

