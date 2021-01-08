
import { mock } from 'jest-mock-extended';
import Product from '../../src/controllers/Product';
import { IProduct } from '../../src/interfaces/product';


describe('Test in Interfaces Product', () => {

  test('should return content success', () => {
  
    //const product = mock<IProduct>();

    const product = new Product();

    const content = product.getContent();
  
    expect(content).not.toBeNull();
  })
});