import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';



@NgModule({
  declarations: [BannerCutOutComponent],
  exports: [
    BannerCutOutComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
