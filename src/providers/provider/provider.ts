import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
//import{ Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import{Http} from '@angular/http';
//import { FormGroup } from '@angular/forms/src/model';
/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class Provider {
  public events:any;
  public i:number;
  public e=[];

  public url="http://sitepro.shreewebs.com/Abhilasha/login-webservice/webservice.php?function="
  //private signup_url="http://sitepro.shreewebs.com/Abhilasha/login-webservice/webservice.php?function="

  constructor(public http:HttpClient, public https:Http ){
    console.log('Hello Provider Provider');
  }

  AuthenticateUser(email,paswd) : Observable<any>{         
         return this.http.get(this.url + "login&email="+email+"&password="+paswd)
               .map(this.extractData)
               .catch(this.handleError);
  }

  SignupUser(f_name,l_name,e_mail,mob,pswd,c_pswd){
    return this.http.get(this.url + "sign-up&fname="+f_name+"&lname="+l_name+"&email="+e_mail+"&mob="+mob+"&pswd="+pswd+"&cpswd="+c_pswd) 
    .map(this.extractData)
    .catch(this.handleError);
  }

  ContactUser(u_name,e_mail,mob,comment){  
        return this.http.get(this.url + "contact-form&name="+u_name+"&email="+e_mail+"&mob="+mob+"&comment="+comment) 
        .map(this.extractData)
        .catch(this.handleError);
      }

  EventRegistration(name,dob,mob,gender,address,ename,etype,fees,advance){
        return this.http.get(this.url + "event&name="+name+"&dob="+dob+"&gender="+gender+"&phone="+mob+"&address="+address+"&event="+ename+"&type="+etype+"&fees="+fees+"&advance="+advance)
        .map(this.extractData)
        .catch(this.handleError);
      }
  
  getEvents(){
        return this.http.get(this.url + "eventnames")
        .map(this.extractData)
        .catch(this.handleError);
  }
  
  private extractData(res: Response) {
        let body = res;
        console.log('res is' + res);
        console.log('body is' + body);
        console.log('Stringified is '+JSON.stringify(body));
        return body || [];
  }

  private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const err = error || '';
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }
  
}
