import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ){  }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', 
      [Validators.email, Validators.required]),
      password: new FormControl(null,
      [Validators.required, Validators.minLength(8)]),
    })
  }

  submit() {
    if (this.form.invalid){
      return
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    }
4
    this.auth.signup(user).subscribe(()=>{
      this.form.reset()
      this.router.navigate(['/authentification'])
    })

  }

}
