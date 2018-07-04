export class Post {
  title: string;
  loveits: number;
  content: string;
  created_at: Date;
  constructor( title, content, loveits, created_at) {
    this.title = title;
    this.content = content;
    this.loveits = loveits;
    this.created_at = created_at;
  }
}
