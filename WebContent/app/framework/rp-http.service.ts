import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import { Http, Headers } from '@angular/http';
import { RpIntercomService } from './rp-intercom.service'
import 'rxjs/add/operator/map';
@Injectable()
export class RpHttpService {
    constructor(private http: Http, private ics: RpIntercomService) {
    }
    doGet(url: string) {
        var headers = new Headers();
        headers.append('Content-Over', this.ics._orgId);
        return this.http.get(url, { headers: headers }).map(res => res.json());
    }
    doPost(url: string, j: any) {
        var params = JSON.stringify(j);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Over', this.ics._orgId);
        return this.http.post(url, params, { headers: headers }).map(res => res.json());
    }
    doPostNormal(url: string, j: any) {
        var params = JSON.stringify(j);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Over', this.ics._orgId);
        return this.http.post(url, params, { headers: headers }).map(res => res);
    }
}