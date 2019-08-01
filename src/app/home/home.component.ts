import { Component, OnInit, Inject } from '@angular/core';
import { ShareService } from '../share.service';
import { ServicecartService } from '../servicecart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private service:ShareService,
     private sercart:ServicecartService,
     private cartserv:ServicecartService
    ) {
   
      
     }

  ngOnInit() {

  }
  //product display
  products=[{
    name:"Birdhouse Bookshelf",
    price:"90.00$",
    src:"../../assets/home_img/1.jpg",
section:"section1",
id:1
  },
  {
    name:"Cheeseboard Animals",
    price:"12$",
    src:"../../assets/home_img/2.jpg",
section:"section2",
id:2
  },{
    name:"Octopus Hook",
    price:"2$",
    src:"../../assets/home_img/3.jpg",
section:"section3",
id:3
  },{
    name:"Octopus Hook",
    price:"120$",
    src:"../../assets/home_img/9.jpg",
section:"section4",
id:4
  },{
    name:"Thing X Sylvester Beach Towe",
    price:"54$",
    src:"../../assets/home_img/7.jpg",
section:"section5",
id:5
  },{
    name:"porro quisquam",
    price:"80$",
    src:"../../assets/home_img/8.jpg",
section:"section6",
id:6
  },
  {
    name:"dolorem ipsum",
    price:"40$",
    src:"../../assets/home_img/5.jpg",
section:"section7",
id:7
  },{
    name:"Hampden-Sydney",
    price:"20$",
    src:"../../assets/home_img/14.jpg",
section:"section8",
id:8
  },
  {
    name:"predefined chunks",
    price:"100$",
    src:"../../assets/home_img/12.jpg",
section:"section8",
id:9
  }]
//to service product
displaypdtservice(pdt){
  this.service.getproduct(pdt)
}

//add to cart
addtocart(pdt){

  this.cartserv.addcartservice(pdt)
  }



}




