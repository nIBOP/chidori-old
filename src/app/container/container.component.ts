import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router
  ){

  }

  exit (){
    this.auth.logout()
    this.router.navigate(['/'])
  }

  check (){
    return this.auth.isAuthenticated()
  }

  ngOnInit() {}

}
