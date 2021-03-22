import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    {
      'id':1,
      'type':'tv',
      'name':'LG 124 cm (50 inch) Full HD Smart LED TV 50FHDXSMART',
      'image':'assets/tv.jpg',
      'price':299,
      'desc':'The H55 Series HD Smart TV is an entertainment must-have that features an Android Operating System (OS) and works with Google Assistant so that you can control the TV without ever leaving your couch.',
      'average_rating':4,
      'condition':2,
      'total_ratings':117
    },
    {
      'id':2,
      'type':'refridgerator',
      'name':'LG 22.5 Cu French 4 Door Refrigerator Counter Depth Stainless Steel 36 Inch',
      'image':'assets/refridgerator.png',
      'price':1599,
      'desc':'SMAD Cabinet Depth French Door Refrigerator Stainless Steel with Auto Ice Maker with Frost free and high humidity preservation',
      'average_rating':3,
      'condition':1,
      'total_ratings':215
    },
    {
      'id':3,
      'type':'vintage_watches',
      'name':'Patek Phillipe HENRY GRAVES Jr. Supercomplication 70 mm, 1 pound',
      'image':'assets/vintage_watches.png',
      'desc':'Only A Handful Were Ever Made In Solid Rose Gold, by Special Royal Order Exclusive 18K Solid Rose Gold Only 1 Surviving Mint',
      'price': 80000,
      'average_rating':5,
      'condition':120,
      'total_ratings':3
    }
  ];


  constructor(private modalService: NgbModal) { }
  
  buyNow={
      'id':1,
      'type':'tv',
      'name':'LG 124 cm (50 inch) Full HD Smart LED TV 50FHDXSMART',
      'image':'assets/tv.jpg',
      'price':299,
      'desc':'The H55 Series HD Smart TV is an entertainment must-have that features an Android Operating System (OS) and works with Google Assistant so that you can control the TV without ever leaving your couch.',
      'average_rating':4,
      'condition':2,
      'total_ratings':117,
      'date':'2018-01-01',
      'month':-1
    };
  

  openVerticallyCentered(content, average_rating, condition,desc,id,image,name,price,total_ratings,type) {
    this.modalService.open(content, { centered: true });
    this.buyNow.average_rating=average_rating;
    this.buyNow.condition=condition;
    this.buyNow.desc=desc;
    this.buyNow.id=id;
    this.buyNow.image=image;
    this.buyNow.name=name;
    this.buyNow.price=price;
    this.buyNow.total_ratings=total_ratings;
    this.buyNow.type=type;
  }

  ngOnInit() {
      
  }

  buy(){
    var cartItems = JSON.parse(localStorage.getItem('my-products')) || [];
    cartItems.push(this.buyNow);
    localStorage.setItem('my-products', JSON.stringify(cartItems)); 
  }

  deletePurchaseHistory(){
    localStorage.clear();
  }

}
