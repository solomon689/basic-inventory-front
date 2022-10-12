import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../../models/response';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getProducts(): Observable<Response<Product[]>> {
    return this.http.get<Response<Product[]>>(`${ environment.apiUrl }/product`);
  }

  public createProduct(product: Product): Observable<Response<Product>> {
    return this.http.post<Response<Product>>(`${ environment.apiUrl }/product`, product);
  }

  public deleteProduct(producId: string | undefined): Observable<Response<any>> {
    return this.http.delete<Response<any>>(`${ environment.apiUrl }/product/${ producId }`);
  }
}
