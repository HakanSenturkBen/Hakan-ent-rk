import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../Product/product/product';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {

  path="http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  getProducts(categoryId:any):Observable<Product[]>{
    let newPath=this.path;
    if(categoryId){
      newPath+="?categoryid="+categoryId;
    }
    return this.http.get<Product[]>(newPath);
  }

  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/jason',
        'Authorization':'Token'
      })
    }
    
    return this.http.post<Product>(this.path, product).pipe(
      tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError))
  }


  handleError(err: HttpErrorResponse){
    let errorMessage=''
    if(err.error instanceof ErrorEvent){
      errorMessage= "bir hata oluştu"+err.error.message
    }else{
      errorMessage="sistemsel hata"
    }
    return throwError(errorMessage);
  } 
  
} 

