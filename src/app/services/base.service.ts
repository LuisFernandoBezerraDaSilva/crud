import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() {
  }

  public apiUrl = environment.apiUrl;

  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
}
