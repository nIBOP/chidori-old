import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ){

  }

  form!: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', 
      [Validators.email, Validators.required]),
      password: new FormControl(null,
      [Validators.required, Validators.minLength(8)]),
    })
  }
  getStatus () {
    return 
  }

  submit() {
    if (this.form.invalid){
      return
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      // returnSecureToken: false
    }

    this.auth.login(user).subscribe(()=>{
      this.form.reset()
      this.router.navigate(['/'])
    })

  }
}
