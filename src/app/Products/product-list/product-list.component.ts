import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product, productResolved } from '../product';
import {  ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

items:Product[]=[];
errorMessage:string='';
data:productResolved;
  constructor(private _router:ActivatedRoute) {
  this.data=this._router.snapshot.data["productData"];
  }
  //
  ngOnInit() {
    this.items=this.data.product;
    this.errorMessage=this.data.errorMessage;
  }

}
