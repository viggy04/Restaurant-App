import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


const MatComponents = [
  MatCardModule,
  MatButtonModule
]

@NgModule({
  imports: [
    MatComponents
  ],
  exports: [
    MatComponents
  ]
})
export class MaterialModule { }
