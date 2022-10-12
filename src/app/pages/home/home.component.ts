import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../core/services/product/product.service';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: Product[] | undefined = [];
  private productSub!: Subscription;
  
  constructor(
    private readonly productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy() {
    this.productSub.unsubscribe();
  }

  private getProducts(): void {
    this.productSub = this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      }
    });
  }

}
