
export interface IProduct {
  // Fields
  getName() : string; 
  setName() : void; 
 
  // Fields
  getManufacturer() : string; 
  setManufacturer() : void; 
 
  // Fields
  getSKU() : string; 
  setSKU() : void; 
 
  // Fields
  getFeatures() : string[]; 
  setFeatures() : void; 

  // Method
  getContent() : string;
}