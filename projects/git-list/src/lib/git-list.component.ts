import { Component, Input, OnInit } from '@angular/core';
import { IGitList } from './git-list.interface';

@Component({
  selector: 'git-list',
  templateUrl: './git-list.component.html',
  styleUrls: ['./git-list.component.scss'],
})
export class GitListComponent implements IGitList, OnInit {
  @Input() Name: string = '';
  @Input() Children: IGitList[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
