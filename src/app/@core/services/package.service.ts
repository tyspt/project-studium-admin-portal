import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { Package, PackageData } from '../data/package';

@Injectable()
export class PackageService implements PackageData {

    endpoint = `${environment.apiHost}/packages`;

    constructor(
        private http: HttpClient,
    ) { }

    getData(): Observable<Package[]> {
        return this.http.get<Package[]>(this.endpoint);
    }

    getPackageByIdOrBarcode(queryNumber: string): Observable<Package> {
        return this.http.get<Package>(`${this.endpoint}/${queryNumber}`);
    }

    addPackage(newPkg: any): Observable<Package> {
        return this.http.post<Package>(this.endpoint, newPkg);
    }
}