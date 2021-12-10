import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { RouterModule } from '@angular/router';
import { COMPONENTS_ROUTES } from './components.routes';
import { AccordionComponent } from './accordion/accordion.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';



@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordionComponent,
    CardComponent,
    ProgressBarComponent,
    StarRatingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
    SharedModule
  ]
})
export class ComponentsModule { }
