import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { ProductService } from '../product.service';
import { DataService } from '../data.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let productService: ProductService;
  let dataService: DataService;
  let httpTestingController: HttpTestingController;

  const mockProducts = [
    { name: 'Product 1', price: 10, author: 'Edward' },
    { name: 'Product 2', price: 20, author: 'Alex' },
    { name: 'Product 3', price: 30, author: 'Joe' }
  ];

  const mockData = [
    { property1: 'Value 1', property2: 'Value 2' },
    { property1: 'Value 3', property2: 'Value 4' },
    { property1: 'Value 5', property2: 'Value 6' }
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [ProductService, DataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    dataService = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('повинен отримати дані про продукти', () => {
    spyOn(productService, 'getProducts').and.returnValue(mockProducts);

    component.ngOnInit();

    expect(productService.getProducts).toHaveBeenCalled();
    expect(component.products).toEqual(mockProducts);

    const req = httpTestingController.expectOne('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    expect(component.siteData).toEqual(mockData.slice(0, 3));
  });

  
});
