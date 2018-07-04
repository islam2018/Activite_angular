import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-lis-item-component',
  templateUrl: './post-lis-item-component.component.html',
  styleUrls: ['./post-lis-item-component.component.scss']
})
export class PostLisItemComponentComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }
  PlusLoveits() {
    this.post.loveits++;
    console.log(this.post.loveits);
  }
  MoinsLoveits() {
    this.post.loveits--;
    console.log(this.post.loveits);
  }

}
