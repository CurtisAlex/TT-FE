import { Component } from '@angular/core';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {


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
