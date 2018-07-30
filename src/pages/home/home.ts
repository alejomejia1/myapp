import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = ['CAMARO.png','iphone.png'];

  constructor(
  public navCtrl: NavController,
  private auth: AngularFireAuth) { }

  signOut(){

    this.auth.auth.signOut();
  }


}
