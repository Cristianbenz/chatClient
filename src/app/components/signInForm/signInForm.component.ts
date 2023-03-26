import { Component, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiAuthService } from "src/app/services/apiAuthService";

@Component({
    selector: "sign-in-form",
    templateUrl: "./signInForm.component.html"
})
export class SignInFormComponent {
    formBuilder = inject(FormBuilder);
    authService = inject(ApiAuthService);

    signInForm = this.formBuilder.group({
        email: [
            "",
            [
                Validators.required,
                Validators.email
            ]
        ],
        password: [
            "",
            [
                Validators.required
            ]
        ]
    })

    signIn() {
        this.authService.signIn(this.signInForm.getRawValue())
        .subscribe()
    }
}