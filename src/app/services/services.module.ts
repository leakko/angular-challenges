import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { RouterModule } from '@angular/router';
import { SERVICES_ROUTES } from './servies.routes';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICES_ROUTES),
    SharedModule
  ]
})
export class ServicesModule { }
