import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../../../services/store.service";
import {ProductsService} from "../../../services/products.service";
import {Product} from "../../../models/product.model";
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  limit = 10;
  offset = 0;

  productId: string | null = null

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.productsService.getAll(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
    this.route.queryParamMap.subscribe(data => {
      this.productId = data.get('product')
    })
  }

  loadMore() {
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }

}
