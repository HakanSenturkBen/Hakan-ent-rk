import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers:[CategoryService, ProductService]
})
export class ProductAddForms2Component implements OnInit {

  productAddForm:FormGroup;
  product:Product=new Product;
  categoriler:Category[];

  constructor(private formBuilder:FormBuilder, 
    private categoryService:CategoryService,
    private productService:ProductService,
    private alertif:AlertifyService) { }
  
  ngOnInit(): void {
    
    this.categoryService.getCatogories().subscribe(res=>{this.categoriler=res});
    this.createProductAddForm();
    
  }

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      description: ["",Validators.required],
      ImageUrl: ["",Validators.required],
      price: ["",Validators.required],
      categoryId: ["",Validators.required],
    });
  }

  add(){
    if (this.productAddForm.valid) {
      this.product=Object.assign({},this.productAddForm.value);
    }
    this.productService.addProduct(this.product).subscribe(res=>{this.alertif.info("ürün eklendi")});
  }

}
