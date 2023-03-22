import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { StoreService } from '../../../services/store.service'
import { AuthService } from '../../../services/auth.service';
import { CategoriesService } from '../../../services/categories.service';
import { User } from '../../../models/user.model';
import {Category} from "../../../models/category.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;

  cartegorias: Category[] = []

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private router: Router,

    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    this.getAllCategory()
    this.authService.user$
      .subscribe( data =>
        this.profile = data
      )

  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.loginAndGet('admin@mail.com', 'admin123')
    .subscribe(user => {
      this.router.navigate(['/profile'])
    });
  }

  logout(){
    this.authService.logout()
    this.profile = null
    this.router.navigate(['/home'])
  }

  getAllCategory(){
    this.categoriesService.getAll().subscribe(data =>{
      this.cartegorias = data
    })
  }

}
