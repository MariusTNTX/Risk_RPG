import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_API_SERVER = '';
  
  constructor(
    private httpClient: HttpClient, 
    private configService: ConfigService
  ){ }

  ngOnInit(){
    this.REST_API_SERVER = this.configService.hostApi;
  }

  public get(path: string){
    return this.httpClient.get(this.REST_API_SERVER + path);
  }

  public post(path: string, body = {}, headers = { 'content-type': 'application/json'}){
    return this.httpClient.post(this.REST_API_SERVER + path, body,{'headers':headers})
  }

  public put(path: string, body = {}, headers = { 'content-type': 'application/json'}){
    return this.httpClient.put(this.REST_API_SERVER + path, body,{'headers':headers})
  }

  public delete(path: string, body = {}){
    return this.httpClient.delete(this.REST_API_SERVER + path, body)
  }

  public upload(path: string, file: FormData) {
    return this.httpClient.put(this.REST_API_SERVER + path, file)
  }
}
