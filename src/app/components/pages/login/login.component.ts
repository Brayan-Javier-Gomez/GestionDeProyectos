import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  dataFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  public DBD = true;
  public dataUser = {
    email: '',
    first_name: '',
    last_name: '',
    rol: '',
    _id: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    console.log('login');
  }

  login() {
    // console.log('login');
    console.log(this.dataFormulario.value);
    this.auth.login(this.dataFormulario.value).subscribe((data: any) => {
      // console.log(data);
      if (data['ok']) {
        console.log('login correcto');
        const token = data.token;
        localStorage.setItem('token', token.toString());
        this.dataUser = data.User;
        console.log(this.dataUser);
        this.router.navigateByUrl('/dashboard');
      }
      else{
        this.DBD = false;
      }
    });
  }
}
