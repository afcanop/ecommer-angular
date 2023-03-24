import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { WebsiteRoutingModule } from './website-routing.module';
import { CommonsModule } from '../commons/commons.module';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import {QuicklinkModule} from 'ngx-quicklink'
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        SwiperModule,
        CommonsModule,
        QuicklinkModule,
        MatMenuModule
    ]
})
export class WebsiteModule { }
