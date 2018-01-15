import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provider} from '../../providers/provider/provider';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import {HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  // public eventList:any;
   public event:any;
   public events:any;
   public i:number;
   public e=[];
  // public e=[];
  //  public i :number;

  user:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provide:Provider) {
    
  }

  getEventNames(){
    this.provide.getEvents()
    .subscribe(data=>{
      this.events= Array.of(data);
      
    for(this.i=0;this.i<data.result.length;this.i++)
      {
         this.events[this.i] = data.result[this.i].name;
         console.log(this.events[this.i]);
     } 
     console.log(JSON.stringify(this.events));
    })
  }

EventRegistration(){

  this.provide.EventRegistration(this.user.value.name,this.user.value.dob,this.user.value.mob,this.user.value.gender,this.user.value.address,this.user.value.ename,this.user.value.etype,this.user.value.fees,this.user.value.advance)
  .subscribe(
  data=>{
    //console.log(data);
    if(data.result=="Success"){
    alert("successful");
    return;
  }
  /*
  else if(data.result=="namefailure"){
    alert("Invalid Name");
    return;
  }
  if(data.result=="feesfailure"){
    alert("invalid fees");
    return;
  }
   if(data.result=="advfailure"){
    alert("invalid advance ");
    return;
  }
  if(data.result=="mobfailure"){
    alert("Invalid mobile no");
    return;
  }
  if(data.result=="mobfailure1"){
    alert("Invalid mobile number");
    return;
  }
  
  if(data.result=="emptygender"){
    alert("please select gender");
    return;
  }

  if(data.result=="emailfailure"){
    alert("Email Id is invalid");
    return;
  }*/
  else if(data.result=="error"){
    alert("cannot insert values");
    return;
  }
  else if(data.result=="detailsfailure")
  alert("Please Enter all Details");
  return;
  },
  err=>{
    alert("Internal Connection Error");
  }
 
  )

}

ionViewDidLoad() {
  //this.provide.getEvents();
  this.getEventNames()
  console.log('ionViewDidLoad EventPage');
  console.log('getEvents has' + this.provide.getEvents());
  this.event = this.provide.getEvents();
  if (this.event === this.provide.getEvents()){
    console.log('We have the right data');
  }
  else
    console.log('Data inconsistent');
//  console.log('ionDidLoad'+this.provide.getEvents());
  console.log('events didLoad'+ Array.of(this.event));
  console.log('events didLoad Stringify'+ this.event);
}


ngOnInit() {
  
  this.user = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
  dob: new FormControl('', [Validators.required]),
  mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
  address: new FormControl('', [Validators.required]),
  gender:  new FormControl('', [Validators.required]),
  etype:  new FormControl('', [Validators.required]),
  ename: new FormControl('',[Validators.required]),
  fees:  new FormControl('', [Validators.required]),
  advance:  new FormControl('', [Validators.required])
  });
}  

}
