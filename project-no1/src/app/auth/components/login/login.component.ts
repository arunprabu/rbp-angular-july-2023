import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="row">
      <form class="col-md-4 offset-md-4" #loginForm="ngForm" (ngSubmit)="handleLogin(loginForm)">
        <h1 class="h3 mb-3 fw-normal">Please Login</h1>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput"  
          placeholder="name@example.com" name="email" ngModel>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" 
          placeholder="Password" name="password" ngModel>
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        <div class="mt-3">
          <p>Not Registered? <a routerLink="/signup">Signup Now for Free</a></p>
        </div>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleLogin(loginForm: any) {
    console.log(loginForm.value);
    // send the above form data to auth service 
    this.authService.login(loginForm.value)
      .subscribe((res: any) => {
        console.log(res);
        // 3 places to save the token
        /*
          1. cookies 
          2. localStorage
          3. sessionStorage (prefer)
        */

        sessionStorage.setItem('authToken', res.token);
        // The following is buggy. To redirect to the right url 
        // Refer: https://github.com/arunprabu/contact-manager-ng13-aug2022/blob/master/src/app/auth/components/login/login.component.ts

        // this.router.navigate(['about']);
        const redirectToURL = this.activatedRoute.snapshot.queryParams['redirectTo'];
        this.router.navigateByUrl(redirectToURL);
      });
  }
}
