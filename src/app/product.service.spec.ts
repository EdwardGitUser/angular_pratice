import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let productService: ProductService;
  let httpTestingController: HttpTestingController;

  const mockProducts = [
    { name: 'Product 1'},
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    productService = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('має отримати захардкоджені дані про продукт', () => {
    const expectedProductName = 'Product 1';

    spyOn(productService, 'getProducts').and.returnValue(mockProducts);

    const products = productService.getProducts();

    expect(products[0].name).toBe(expectedProductName);
  });
});
