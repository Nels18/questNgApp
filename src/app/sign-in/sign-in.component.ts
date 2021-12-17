import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { User } from "../shared/user.model";
import { forbidenExtensionGouvValidator } from "../shared/forbiden-extension-gouv";
import { forbidenExtensionValidator } from "../shared/forbiden-extension";
import { checkEqualityValidator } from "../shared/check-equality";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  // signInForm = new FormGroup({
  //   user: new FormControl(''),
  //   email: new FormControl(''),
  //   // Nested FormGroup
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     zipZode: new FormControl(''),
  //     // Nested empty FormArray
  //     details: new FormArray([])
  //   })
  // });

  // On utiliser FormBuilder qui est une classe utilitaire (service) qui permet d’éviter d’avoir à instancier manuellement tous les objets
  signInForm = this.fb.group({
    user: ['', Validators.required],
    email: ['',  [
      Validators.required,
      Validators.email,
      // Custom validator
      forbidenExtensionGouvValidator,
      // Custom validator with single parameter
      forbidenExtensionValidator('.gouv')
    ]],
    // Nested FormGroup
    address: this.fb.group({
      street: [''],
      city: [''],
      zipCode: [''],
      // Nested FormArray
      details:this.fb.array([])
    }),
    password: this.fb.group({
      password1: ['', Validators.required],
      password2: ['',  Validators.required],
    },
    {
      // FormGroup validator
      validator: checkEqualityValidator('password1', 'password2')
    })
  });

  ngOnInit(): void {}
  // // Append address details
/*   addAddressDetails() {
    // Get 'address' FormGroup then 'details' FormArray
    const details = this.signInForm.get('address')?.get('details') as FormArray;
    // Add new FormControl to 'details' FormArray
    details.push(new FormControl(''));
  }

  onSubmit() {
    // Get form value as JSON object
    const user:User = this.signInForm.value;
    console.log(user) // --> {user: 'John Doe', email: 'john@doe.gouv', [...]}
  }

  // *** Ces deux méthodes te permettent de mettre à jour tes input via ton component ***.


  // Tu peux utiliser la méthode .patchValue() de FormGroup pour mettre à jour des contrôles spécifiques :
  randomUsername() {
    // Update FormGroup
    this.signInForm.patchValue({
      user: Math.random().toString(36) // Can set specific or all properties
    })
  }

  // Ou alors tu peux utiliser .setValue() mais là, tu dois spécifier tous les contrôles du FormGroup :
  // update(user: User) {
  //   // Update FormGroup
  //   this.signInForm.setValue({ // all properties need to be set
  //     user: user.user,
  //     email: user.email,
  //     address: {
  //       street : user.adress.street,
  //       city : user.adress.city,
  //       zipCode : user.adress.zipCode
  //     }
  //   })
  // }

  // *** Tu peux observer les changements sur tes contrôles grâce à .valuesChanges() (apporté par la classe AbstractControl) qui retourne un Observable sur lequel tu dois souscrire avec .subscribe() pour être à l’écoute des changements de valeurs. ***

  // Tu peux écouter les changements de valeur de tout un FormGroup, par exemple :
  observeSignInForm() {
    // Get observale from FormGroup
    this.signInForm.valueChanges
      // Listens to new values ​​issued when any FormConrol is changed
    .subscribe(value => {
      // Display FormGroup as JSON object
      console.log(value);  // --> {user: 'John Doe', email: 'john@doe.gouv', [...]}
    });
  }
  observeUserControl() {
     // Get observale from FormControl
    this.signInForm.get('user')?.valueChanges
    // Listens to new values ​​issued when any FormConrol is changed
    .subscribe(value => {
      // Display new input value every keypress
      console.log(value);
    });
  } */
}
