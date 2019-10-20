export class MovieCast {
  /*
      "cast_id": 20,
      "character": "Rose DeWitt Bukater",
      "credit_id": "52fe425ac3a36847f80179cb",
      "gender": 1,
      "id": 204,
      "name": "Kate Winslet",
      "order": 0,
      "profile_path": "/w8wjPbS24vPErNeYhAvtbyAUBMd.jpg"
   */
  cast_id: number;
  character: string;
  credit_id: string;
  gender: string;
  id: number;
  name: string;
  order: number;
  profile_path: string;

  constructor(obj: any) {
    this.cast_id = obj.cast_id || 0;
    this.character = obj.character || '';
    this.credit_id = obj.credit_id || '';
    this.gender = obj.gender === 1 ? 'Female' : 'Male';
    this.id = obj.id || 0;
    this.name = obj.name || '';
    this.order = obj.order || 0;
    this.profile_path = obj.profile_path || '';
  }
}
