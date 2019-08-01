import { Injectable } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }
pdt:{}
 getproduct(homepdt){

   this.pdt=homepdt
  }



}
