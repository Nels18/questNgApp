import { Component, OnInit } from '@angular/core';
import { User } from "../user/shared/User";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userModel: User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.userModel);
  }

}
