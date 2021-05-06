import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {
  path="http://localhost:3000/categories";
  constructor(private http:HttpClient) { }


getCatogories():Observable<Category[]>{
  return this.http.get<Category[]>(this.path);
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