import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAddresses, ZoneI } from '@shared/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  url =
    'https://info.iharta.md:6443/arcgis/rest/services/locator/CompositeLoc/GeocodeServer/findAddressCandidates';

  constructor(private http: HttpClient) {}

  getLocation(city: string, address: string): Observable<IAddresses> {
    let params = new HttpParams();
    params = params.set('SingleLine', address);
    params = params.set('f', 'pjson');

    return this.http.get<IAddresses>(this.url, { params });
  }
}
