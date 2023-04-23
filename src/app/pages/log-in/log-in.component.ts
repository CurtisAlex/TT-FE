import { Component } from '@angular/core';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  // To start, users accounts should be auto generated based on the uniqueness of there device. 
  // They should have the option to sign up if they want, but it is not necessary


  // Most likely will become a native app component instead of a webpage 
  // Could possibly use this: https://www.npmjs.com/package/@abacritt/angularx-social-login

  googleSignIn() {
    console.log("Use google api to signin with google account");
  }

  appleSignIn() {
    console.log("Use apple api to signin with apple account");
  }

  signUp() {
    console.log("Use our own thing to allow users to sign up - i vote aganist this for now");
  }

}
