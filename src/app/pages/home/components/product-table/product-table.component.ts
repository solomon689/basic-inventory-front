import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductService } from '../../../../core/services/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  @Input() public products: Product[] | undefined = [];
  public method!: 'CREATE' | 'UPDATE';
  public modalTitle: string = '';

  constructor(
    private readonly productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  public createModal(): void {
    this.method = 'CREATE';
    this.modalTitle = 'Crear Producto';
  }

  public addNewProduct(product: Product): void {
    this.products?.push(product);
  }

  public deleteProduct(productId: string | undefined): void {
    this.productService.deleteProduct(productId).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'EXITO!',
          titleText: response.getMessage,
          icon: 'success',
          position: 'center',
          timer: 1500,
        });
      }
    });
  }
}
