import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-lis-component',
  templateUrl: './post-lis-component.component.html',
  styleUrls: ['./post-lis-component.component.scss']
})
export class PostLisComponentComponent implements OnInit {


  @Input() posts;
  constructor() {}


  ngOnInit() {

  }

}
