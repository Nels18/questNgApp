import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { minDateValidator } from "../shared/min-date";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit{

  orderForm = this.fb.group({
    title: ['',Validators.required],
    quantity: ['', [
        Validators.required,
        Validators.max(5)
      ]
    ],
    date: ['',[
        Validators.required,
        minDateValidator(new Date())
      ]
    ],
    contact: ['', [
        Validators.required,
        Validators.email
      ]
    ],
    payments: this.fb.array([]) // FormArray control
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // get Observable from FormGroup
    this.orderForm.valueChanges
    // listen to value change
    .subscribe(value => {
      console.log('orderForm value changes : ', value);
    });
  }

  get payments(): FormArray {
    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }

  addPayments() {
    // create FormGroup with two FormControl
    const paymentForm = this.fb.group({
      date: ['', Validators.required],
      amount: ['', Validators.required]
    });
    // parse abstract control to FormArray
    const payments = this.orderForm.get('payments') as FormArray;
    // add new FormGroup to control 'payments'
    payments.push(paymentForm);
    console.log(payments.controls[0]);
  }

  onSubmit() {
    // Form submitted
    console.log("Form submitted", this.orderForm.value);
  }

}
