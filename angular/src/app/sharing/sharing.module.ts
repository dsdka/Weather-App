import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [PageNotFoundComponent,
    ErrorComponent
  ],
  exports: [ErrorComponent,
    PageNotFoundComponent
  ]
})
export class SharingModule { }
