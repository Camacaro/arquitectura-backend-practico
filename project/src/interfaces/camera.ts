import { IProduct } from './product';

export interface ICamera extends IProduct {

  getMaxISO() : number;
  setMaxISO() : void;

  getType() : string;
  setType() : void;

  getCropFactor() : number;
  setCropFactor() : void;

}