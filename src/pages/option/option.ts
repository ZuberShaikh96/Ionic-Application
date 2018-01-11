import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

import {EventPage} from '../event/event';
import {ContactPage} from '../contact/contact';
/**
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
})
export class OptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  ForContact(){
    
        let modal = this.modalCtrl.create(ContactPage);
        modal.present();
  }

  ForEvent(){

    let modal= this.modalCtrl.create(EventPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionPage');
  }

}
