import { Component, OnInit, OnChanges } from '@angular/core';
import { ShareService } from '../share.service';
import { ServicecartService } from '../servicecart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit{

  constructor(private service:ShareService,private cartserv:ServicecartService) { }

  ngOnInit() {
    this.viewdel_pdt()
  }
  //view clicked pdt
detailedpdt:{}
viewdel_pdt(){
  this.detailedpdt=this.service.pdt

}
//add to cartservice
addtocart(pdt){

this.cartserv.addcartservice(pdt)
}
}
