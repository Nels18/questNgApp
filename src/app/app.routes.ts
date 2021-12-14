import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignUpComponent } from "./sign-up/sign-up.component";;

const ROUTES: Routes = [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

export { ROUTES };
