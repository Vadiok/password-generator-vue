export class PropertyInfo {
  public key: string;
  public title: string;

  constructor(key: string, title: string = key) {
    this.key = key;
    this.title = title;
  }
}
