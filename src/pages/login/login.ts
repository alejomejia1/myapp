import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 loginData = {
  email: '',
  password: ''

 }

  constructor(
  public navCtrl: NavController,
  private afAuth: AngularFireAuth, 
  private toastCtrl: ToastController) { }

  login(){
 this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, 
 this.loginData.password)
    .then(auth => {
    // Do custom things with auth

  })

   .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 1000
      });
      toast.present();
    });
  }
  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }

  loginWithFacebook(){

  this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((res) => console.log(res));
  }
}
