import { HttpClient, HttpBackend, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class GraphService {


  constructor(public http: HttpClient) {}

  getMonthData() {
		return this.http.get('https://sushobhangdata.herokuapp.com/get_months').toPromise().then(res => {
      return Promise.resolve(res);
    }).catch(err => {
      return Promise.reject(err);
    });
	}

  getSecondData() {
		return this.http.get('https://sushobhangdata.herokuapp.com/get_second_dose').toPromise().then(res => {
      return Promise.resolve(res);
    }).catch(err => {
      return Promise.reject(err);
    });
	}

  getFirstData() {
		return this.http.get('https://sushobhangdata.herokuapp.com/get_first_dose').toPromise().then(res => {
      return Promise.resolve(res);
    }).catch(err => {
      return Promise.reject(err);
    });
	}

  getTotalData() {
		return this.http.get('https://sushobhangdata.herokuapp.com/get_total_dose').toPromise().then(res => {
      return Promise.resolve(res);
    }).catch(err => {
      return Promise.reject(err);
    });
	}

}
