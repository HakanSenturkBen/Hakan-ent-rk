import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';


@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService, ProductService]
})
export class ProductAddForms1Component implements OnInit {

  
  categoriler:Category[];
  productModel:Product=new Product;
  

  constructor(private categoryService:CategoryService, private productService:ProductService, private alertif:AlertifyService) { }
  
  ngOnInit(): void {
    this.categoryService.getCatogories().subscribe(res=>{this.categoriler=res});
    

  }

  add(form:NgForm){
    
    this.productService.addProduct(this.productModel).subscribe(res=>{this.alertif.info(" ürün eklendi")});
  }
}
