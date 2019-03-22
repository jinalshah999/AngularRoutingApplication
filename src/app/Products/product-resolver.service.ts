import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Product, productResolved } from './product';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<productResolved> {
id:number;
arr:Product[]=[];
  constructor(private productdata:ProductService) { }
  resolve(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<productResolved>
  {
    if(next.params['id']!=null){
      this.id=parseInt(next.paramMap.get('id'));
      if(this.id===0){
        return of({ product: null,errorMessage:'' });
      }
      else{


        return this.productdata.getProductById(this.id).pipe(
          map(product=>({product:this.arr.concat(product),errorMessage:''})),
          catchError(err=>{
            console.log(err);
            return of({ product: null,errorMessage:err.message });
          })
        );
      }
    }
    else{
      return this.productdata.getAllProducts().pipe(
        map(product => ({ product: product,errorMessage:'' })),
        catchError(err=>{
          console.log(err);
          return of({ product: null,errorMessage:err.message });
        })
      );
    }

  }
}
