import { IProduct } from "./product";

export interface IReview {
  // Fields
  getTitle() : string;
  setTitle() : void;
  // Fields
  getContent() : string;
  setContent() : void;
  // Fields
  getAuthor() : string;
  setAuthor() : void;

  Product: IProduct
}