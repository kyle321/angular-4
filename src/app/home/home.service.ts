import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';



@Injectable()

export class HomeService{

    constructor(private _http:Http){}
    private _url:string="assets/employee.json";
    getData(){
        return this._http.get(this._url)
            .map((res:Response)=>res.json())
            .catch(this._catchError);
    }
    _catchError(error:Response){
        console.error(error);
        return Observable.throw(error || 'server not found');
    }
}
