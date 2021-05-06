import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  title="Kategori Listesi"
  categories:Category[];
  
  constructor(private categoryService:CategoryService) { }
  

  ngOnInit(): void {

    this.categoryService.getCatogories().subscribe(res=>{this.categories=res});
   

  }

}
