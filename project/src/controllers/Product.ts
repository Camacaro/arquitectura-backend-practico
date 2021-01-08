import { IProduct } from '../interfaces/product';


class Product implements IProduct {
  
  private _name: string = '';
  private _manufacturer: string = '';
  private _sku: string = '';
  private _features: string = '';

  constructor() {
  }

  public get Name() {
    return this._name;
  }

  public set Name(value) {
    this._name = value;
  }

  public get Manufacturer() {
    return this._manufacturer;
  }

  public set Manufacturer(value) {
    this._manufacturer = value;
  }

  public get SKU() {
    return this._sku;
  }

  public set SKU(value) {
    this._sku = value;
  }

  public get Features() {
    return this._features;
  }

  public set Features(value) {
    this._features = value;
  }

  getContent(): string {
    return '';
  }

} 

export default Product