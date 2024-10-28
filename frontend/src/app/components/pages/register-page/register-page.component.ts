import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PasswordMatchV } from '../../../shared/Validators/password_match_v';
import { IURegister } from '../../../shared/models/interfaces/IURegister';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit{

  registerForm!:FormGroup;
  isSubmitted = false;

  returnUrl = '';
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private actvatedRoute: ActivatedRoute, private router:Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword:['', [Validators.required]]

    },{
      validators: PasswordMatchV('password', 'confirmPassword')
    });
    this.returnUrl = this.actvatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.registerForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const formvalue = this.registerForm.value;
    const user: IURegister = {
      name: formvalue.name,
      email: formvalue.email,
      password: formvalue.password,
      confirmPassword: formvalue.confirmPassword
    };

    console.log(user)

    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
