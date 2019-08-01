import { Component, OnInit, Inject } from '@angular/core';
import { ShareService } from '../share.service';
import { ServicecartService } from '../servicecart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {
  myproducts
  constructor(public service:ShareService,
    public cartserv:ServicecartService,
    private router: Router
    ) {
      this.cartserv.observablepdt.subscribe((param)=>{
      
        this.myproducts=param;
     })

    }
    auth:boolean=false
  ngOnInit() {
  if(localStorage.getItem("auth")==="yes"){
document.getElementById("logout").style.display="block" 
 }
 else{
  document.getElementById("logout").style.display="none" 
 
 }
  }

//delete item
delitem:any
delete(pdt){


this.delitem= this.cartserv.cartpdt.indexOf(pdt)
if (this.delitem > -1) {
  this.cartserv.cartpdt.splice(this.delitem, 1);

}
console.log("pdt", this.cartserv.cartpdt);
this.cartserv.decreascount()
this.savepdts()
}
//decrease and increase elements

increase(pdt){
  pdt.cartnum++
  this.cartserv.count++
}
decrease(pdt){
  if(pdt.cartnum>0||this.cartserv.count>0){
  pdt.cartnum--
  this.cartserv.count--

    return
  }
}
//save products in localstorage
savepdts(){
  localStorage.setItem("myproducts",JSON.stringify(this.cartserv.cartpdt));
}

//log out
logout(){
  localStorage.setItem("auth","no")
  this.router.navigateByUrl('/home')



}

}
