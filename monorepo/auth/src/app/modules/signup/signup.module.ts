import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [
    SignupComponent
  ],
  exports: [SignupComponent],
  providers: [],
  bootstrap: [SignupComponent]
})
export class SignupModule { }
