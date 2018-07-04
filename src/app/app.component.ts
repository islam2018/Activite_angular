import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts = [
    new Post('Premier Post', 'bla blaaaaa hee u', 2, new Date()),
    new Post('Deuxieme Post', 'COMOOOOON its working, -1', -2, new Date()),
    new Post('Troisieme Post', 'angular is so cooool', 0, new Date()),
    new Post('Dernier Post', 'thanx for the correction', -3, new Date()),
  ];

}


