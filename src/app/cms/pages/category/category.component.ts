import {Component, OnInit} from '@angular/core';
import {Category} from "../../../models/category.model";
import {StoreService} from "../../../services/store.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CategoriesService} from "../../../services/categories.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getAllCategory()
  }

  displayedColumns: string[] = ['id', 'name'];
  dataSource: Category[] = [];

  getAllCategory(){
    this.categoriesService.getAll().subscribe(data =>{
      this.dataSource = data
    })
  }

}
