import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

   constructor(
  public navCtrl: NavController,
  private auth: AngularFireAuth) { }

  signOut(){

    this.auth.auth.signOut();
  }

}
