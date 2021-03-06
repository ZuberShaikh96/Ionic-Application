import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Provider } from '../providers/provider/provider';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { SignupPage } from '../pages/signup/signup';
import { OptionPage } from '../pages/option/option';
import { ContactPage } from '../pages/contact/contact';
import { EventPage } from '../pages/event/event';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    OptionPage,
    ContactPage,
    EventPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   SignupPage,
   OptionPage,
   ContactPage,
   EventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider
  ]
})
export class AppModule {}
