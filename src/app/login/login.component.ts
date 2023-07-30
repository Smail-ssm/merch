import { Component, OnInit , Inject } from '@angular/core';
import { Validators, AbstractControl, FormBuilder, FormGroup, FormControl , Validator , FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

import { CheckRequiredField } from '../_shared/helpers/form.helper';
import { AuthService } from '../_auth/services/auth.service';

  import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service'; // Make sure to import the ConfigService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  apiBaseUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.configService.getConfig().subscribe((config) => {
      this.apiBaseUrl = config.apiBaseUrl;
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    const formData = {
      username: username,
      password: password
    };

    // Send the data via API using HttpClient
    this.http.post(`${this.apiBaseUrl}/login`, formData).subscribe(
      (data) => {
        // Process the API response if needed
        console.log(data);
        // You can perform further actions here, such as showing a success message
      },
      (error) => {
        // Handle any errors that occurred during the API call
        console.error('Error:', error);
        // You can show an error message to the user or handle the error as needed
      }
    );
  }
}

