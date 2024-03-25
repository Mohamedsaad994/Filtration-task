import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private _ContactService:ContactService){}

  contactForm: FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  })


  handleForm():void{
    const userData = this.contactForm.value;
    if(this.contactForm.valid === true){
      this._ContactService.sendFormData(userData).subscribe({
        next: (response) => {
          console.log(response);
          this.contactForm.reset()
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}
