import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { PaymentService} from '../shared/payment.service';
import { UserDTO } from '../shared/userDTO';

@Component({
  selector: 'app-CreateUser',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
 UserForm: FormGroup;
 newUserpost: UserDTO;
 

  constructor(private router : Router, private paymentService : PaymentService) { }

  ngOnInit() {
   this.UserForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      budget: new FormControl(null, [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      currency: new FormControl('$'),
    });
  }

  onSubmit(NewUser: UserDTO): void {
    if (this.UserForm.valid) {
        const user = { ...NewUser, ...this.UserForm.value };
        this.paymentService.PostUserapi(user).subscribe((res)=>{  
               console.log("Created New User.");
               swal.fire('Saved', 'User was saved successfully', 'success');  
               this.router.navigate(['/Users'])
             },  (err) => {
               console.log(err)
               swal.fire('Failed!', "User could not be saved.", 'error');
             });
      }
  }


  Back(){
    this.router.navigate(['/Users'])
  }
}
