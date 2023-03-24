import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router'
import {ReversePipe} from './pipes/reverse.pipe'
import {TimeAgoPipe} from './pipes/time-ago.pipe'
import {HighlightDirective} from './directives/highlight.directive'
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ImgComponent } from './components/img/img.component';
import {SwiperModule} from "swiper/angular";
@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    HighlightDirective,
    TimeAgoPipe,
    ReversePipe,
    ImgComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        SwiperModule,
        NgOptimizedImage,
    ],
  exports:[
    ProductComponent,
    ProductsComponent,
    HighlightDirective,
    TimeAgoPipe,
    ReversePipe
  ]
})
export class CommonsModule {
}
