import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicecartService {

  constructor() {


   }

cartpdt=[]
count:number=0




  addcartservice(pdt){

    console.log("pdt",pdt)   
    this.count++


    this.updateCountValue(this.count)
  
if(this.cartpdt.length==0){
  pdt.cartnum=1

 this.cartpdt.push(pdt)
}
else{
  this.cartpdt.map(function(item)
{

  if(item===pdt){
  
      item.cartnum++
    }


  else if(item!==pdt){

    this.cartpd=JSON.parse(localStorage.getItem("myproducts"))                
console.log(this.cartpd)
this.cartpdt.push(pdt)
localStorage.setItem("myproducts",this.cartpdt)
  }
}
  )


}
 console.log("cartproduct",this.cartpdt)   

this.updatecartpage(this.cartpdt)
  }



 //update count cart
  public dataCount =new BehaviorSubject(0);
  observableCount=this.dataCount.asObservable();
  updateCountValue(value){
    this.dataCount.next(value);
  }



  //update cart page
  public pdtcartpage =new BehaviorSubject(0);
  observablepdt=this.pdtcartpage.asObservable();
  updatecartpage(value){
    this.pdtcartpage.next(value);
    console.log(this.cartpdt)
  }










//decreas count while deleting
decreascount(){
  this.count=this.count-1
 
}


   

}
