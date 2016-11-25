export class Event {
  title: string;
  image: string;
  start: string;
  end: string;

  constructor(title:string, image:string, start:string, end:string) {
    this.title = title;
    this.image = image;
    this.start = start;
    this.end = end;
  }
}
