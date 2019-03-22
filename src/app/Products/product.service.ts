import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Product, productResolved } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url:string=environment.url+'prod/';
  constructor(private _db: AngularFirestore,private _http:HttpClient) { }
  getAllProducts():Observable<Product[]>{

    return this._http.get<Product[]>(this.url);
  }
  getProductById(id:number):Observable<Product>{
    return this._http.get<Product>(this.url+id);
  }
}
