import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Products} from '../model/products';

@Injectable()
export class ProductService {

  private productsUrl = 'assets/json/products.json';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }

  getProducts(): Observable<Products> {
    return this.http
      .get<Products>(
        this.productsUrl,
        { headers: this.getHeaders() }
      );
  }

}
