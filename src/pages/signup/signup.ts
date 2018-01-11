import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Provider } from '../../providers/provider/provider';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit{

  user: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public provide:Provider) {
  }

  SignupUser(){

    this.provide.SignupUser(this.user.value.fname,this.user.value.lname,this.user.value.email,this.user.value.mob,this.user.value.pswd,this.user.value.cpswd)
    .subscribe(
      data=>{
        //console.log(data);
        if(data.result=="Success"){
        alert("successful");
        return;
        
      }
      else if(data.result=="failure"){
        alert("Email is already registered");
        return;
      }
      if(data.result=="emptyfailure"){
        alert("Please enter all details");
        return;
      }
       if(data.result=="failure1"){
        alert("Mobile number is already registered");
        return;
      }
      if(data.result=="passfailure"){
        alert("passwords dont match");
        return;
      }
      if(data.result=="mobfailure"){
        alert("Invalid mobile number");
        return;
      }
      if(data.result=="mobfailure1"){
        alert("Invalid mobile number");
        return;
      }
      if(data.result=="fnamefailure"){
        alert("Invalid First Name");
        return;
      }
      if(data.result=="lnamefailure"){
        alert("Invalid Last Name");
        return;
      }
      if(data.result=="emailfailure"){
        alert("Email Id is invalid");
        return;
      }
      if(data.result=="error"){
        alert("cannot insert values");
        return;
      }
      },
      err=>{
        alert("connection error");
      }
    ) 







  }

  ngOnInit() {
    
    this.user = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    lname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required]),
    mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    pswd: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(15)]),
    cpswd: new FormControl('', [Validators.required])
    });
      }
    



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
