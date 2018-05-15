import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Products} from '../model/products';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Categories} from '../model/categories';

@Injectable()
export class CategoryService {

  private categoriesUrl = 'assets/json/categories.json';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }

  getProducts(): Observable<Categories> {
    return this.http
      .get<Categories>(
        this.categoriesUrl,
        { headers: this.getHeaders() }
      );
  }

}
