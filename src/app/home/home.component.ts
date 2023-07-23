import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any;
  siteData: undefined;

  constructor(
    private productService: ProductService,
    private httpas: DataService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.fetchApiData();
  }

  fetchApiData(): void {
    this.httpas.getData().subscribe(
      (data) => {
        this.siteData = data.slice(0, 3); // отримати тільки перші три "рядки"
      },
      (error) => {
        console.error('Error fetching API data:', error);
      }
    );
  }

  //    Прив'язка даних :)

  title = 'одностороннє звязування';
  name = 'this comes from ts file';
  data = '12312';
  handleClick() {
    console.log(alert('button clicked ' + this.data));
  }
}
