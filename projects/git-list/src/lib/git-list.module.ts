import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GitListComponent } from './git-list.component';



@NgModule({
  declarations: [
    GitListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GitListComponent
  ]
})
export class GitListModule { }
