import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import {List} from '../app/model/List'
@Injectable()
export class HttpService {
configurl
  constructor(private https:HttpClient) { 
    this.configurl='https://dog.ceo/api/breeds/list'
  }

/** 
 * Returns Observable having type List where list is schema of json Object we create new class ----is used to make external api calls from angular
*/
 getData():Observable<List>{
  return this.https.get<List>(this.configurl)  
 }

}
