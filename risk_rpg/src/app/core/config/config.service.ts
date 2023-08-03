import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any = {
    hostApi: 'http://myDomain/api.php?'
  };

  private _territoryPointSizeValue: number = 2;

  constructor(private http: HttpClient) { }

  get hostApi() {
    return this.config.hostApi;
  }

  get territoryPointSize(){
    return this._territoryPointSizeValue;
  }
  set territoryPointSize(value: number) {
    this._territoryPointSizeValue = value;
  }

}
