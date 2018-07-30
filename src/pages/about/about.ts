import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 
 constructor(
  public navCtrl: NavController,
  private auth: AngularFireAuth) { }

  signOut(){

    this.auth.auth.signOut();
  }

}
