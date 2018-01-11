import { Component } from '@angular/core';
import { NavController , ModalController} from 'ionic-angular';
import {OnInit} from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Provider } from '../../providers/provider/provider';

import { SignupPage } from '../signup/signup';
import { OptionPage } from '../option/option';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

//  email:string;
//  paswd:string;
  user:FormGroup;

  constructor(public navCtrl: NavController,public provide:Provider,public modalCtrl:ModalController) {

  }

  AuthenticateUser(){
    this.provide.AuthenticateUser(this.user.value.email,this.user.value.pswd)
    .subscribe(
      data=>{
        console.log(data.result);
        if(data.result=="Success")
        {
          alert("login successful");
          let modal = this.modalCtrl.create(OptionPage);
          modal.present();

        
      }
      else if(data.result=="failure"){
        alert("login failed, please check email and password");
      }
      if(data.result=="emailfailure"){
        alert("Please enter Email Id");
        return;
      }
      if(data.result=="passfailure"){
        alert("Please enter Password");
        return;
      }
      if(data.result=="detailsfailure"){
        alert("Please enter Email and Password");
        return;
      }
      },
      err=>{
        alert("Connection error");
        console.log('error is');
        console.log(err);
      }
    )
   }      

  ForSignup(){

    let modal = this.modalCtrl.create(SignupPage);
    modal.present();

  }


  ngOnInit() {
    
    this.user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    pswd: new FormControl('', [Validators.required, Validators.maxLength(10)])
    
    });
    
      }
  
      ionViewDidLoad(){

        //this.AuthenticateUser();
        
      }
      

}
