import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let dataService: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    dataService = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('має отримати дату з апі', () => {
    const mockData = [{ currency: 'USD', rate: 1.22 }, { currency: 'EUR', rate: 1.35 }];

    dataService.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
