import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';



@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe, CreditCardFormatterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES),
    SharedModule
  ]
})
export class PipesModule { }
