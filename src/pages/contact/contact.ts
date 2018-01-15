import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {OnInit} from '@angular/core';
import { Provider } from '../../providers/provider/provider';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage implements OnInit {

  user:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public provide:Provider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }


  ContactUser(){

      this.provide.ContactUser(this.user.value.name,this.user.value.email,this.user.value.mob,this.user.value.comment)
        .subscribe(
          data => {
            console.log(data.result);
            if(data.result=="Success")
            {
                    alert("Data Success");
          
                   // let modal = this.modalCtrl.create(OptionPage);
                    //modal.present();
            
            }
                else if(data.result=="detailsfailure"){
                  alert("please fill data");
                }
                if(data.result=="namefailure"){
                  alert("Please enter Valid name");
                  return;
                }
                if(data.result=="emailfailure"){
                  alert("Please enter valid Email");
                  return;
                }
                if(data.result=="mobfailure"){
                  alert("Please enter valid mobile no");
                  return;
                }
                if(data.result=="mobfailure1"){
                  alert("Please enter valid mobile no");
                  return;
                }
                if(data.result=="emptyname"){
                  alert("Please enter name");
                  return;
                }
                if(data.result=="emptymob"){
                  alert("Please enter mobile no");
                  return;
                }
                if(data.result=="emptyemail"){
                  alert("Please enter email");
                  return;
                }
                if(data.result=="emptycomment"){
                  alert("Please enter comment");
                  return;
                }
                if(data.result=="failure"){
                  alert("Data Inserted Fail");
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


  ngOnInit(): void {
    
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      comment: new FormControl('', [Validators.required, Validators.minLength(320)])
      });
    }

}
