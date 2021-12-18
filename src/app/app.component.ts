import { Component } from '@angular/core';
import { IGitList } from 'projects/git-list/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  children: IGitList[] = [
    {
      Name: '1',
      Children: [
        {
          Name: '1.1', Children: []
        },
        {
          Name: '1.2', Children: [
            {
              Name: '1.2.1', Children: []
            }
          ]
        },
        {
          Name: '1.3', Children: [
            {
              Name: '1.3.1', Children: []
            },
            {
              Name: '1.3.2', Children: []
            }
          ]
        }
      ]
    },
    {
      Name: '2', Children: []
    }
  ]
  title = 'app';
  constructor() {

  }
}
