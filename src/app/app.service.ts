import { Injectable} from '@angular/core';
import { NgModule} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class AppService{
    constructor(private _http:Http){

    }
    private url:string="assets/employee.json";
    getDate(){

        return this._http.get(this.url)
            .map((res:Response)=>res.json())
            .catch(this._errorHandler);
    }
    _errorHandler(error:Response){
        console.error(error);
        return Observable.throw(error || 'server not found');
    }
}


