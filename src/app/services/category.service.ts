import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{

  constructor(private http: HttpClient) {
    super();
  }


  getCategory(): Observable<any> {
    let API_URL = `${this.apiUrl}/category`;
    return this.http.get(API_URL, { headers: this.headers});
  }

  createCategory(category: any): Observable<any> {
    let API_URL = `${this.apiUrl}/category`;
    return this.http.post(API_URL, category, { headers: this.headers });
  }

  updateCategory(category: any): Observable<any> {
    let API_URL = `${this.apiUrl}/category`;
    return this.http.put(API_URL, category, { headers: this.headers });
  }

  deleteCategory(id: number): Observable<any> {
    console.log(id)
    console.log('aaaaaaaaaaaa')
    let API_URL = `${this.apiUrl}/category/${id}`;
    return this.http.delete(API_URL, { headers: this.headers });
  }
} 
