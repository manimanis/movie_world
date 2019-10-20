export class ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;

  constructor(obj: any) {
    this.id = obj.id || 0;
    this.logo_path = obj.logo_path || '';
    this.logo_path = this.logo_path.trim();
    this.name = obj.name || '';
    this.name = this.name.trim();
    this.origin_country = obj.origin_country || '';
    this.origin_country = this.origin_country.trim();
  }
}
