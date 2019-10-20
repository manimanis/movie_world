export class MovieGenre {
  id: number;
  name: string;

  constructor(obj: any) {
    this.id = obj.id || 0;
    this.name = obj.name || '';
  }
}
