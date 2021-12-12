import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { CardComponent } from '../components/card/card.component';



@NgModule({
  declarations: [BannerCutOutComponent, CardComponent],
  exports: [
    BannerCutOutComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
