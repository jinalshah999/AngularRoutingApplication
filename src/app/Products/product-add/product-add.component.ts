import { Component, OnInit } from '@angular/core';
import { Product, productResolved } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  items:Product[]=[];
errorMessage:string='';
data:productResolved;
  constructor(private _router:ActivatedRoute) {
  this.data=this._router.snapshot.data["productData"];
  this.errorMessage=this.data.errorMessage;
  }
  //
  ngOnInit() {
    if(this.data.product!=null){
      this.items=this.data.product;
      console.log('items'+this.data.product[0].pname);

    }
    else{
      console.log('add form');
    }


  }

}
