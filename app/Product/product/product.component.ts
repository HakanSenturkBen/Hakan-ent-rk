import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]

})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,
    private httpClient:HttpClient,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
        ) { }

  title="Ürün Listesi";
  filterText="";
  yol="";

  products:Product[]=[];
   
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(res=>this.products=res);
    }
      )
    

 
  }

  addToCart(x:Product){
    this.alertifyService.success(x.name)

   
   
  }

}
