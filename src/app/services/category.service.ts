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
    // TODO DEFINIR URL
    let API_URL = `${this.apiUrl}/categories/v1/vendor/jkFiqKeUhrB2stkPsWP3`;
    return this.http.get(API_URL, { headers: this.headers});
  }
}
