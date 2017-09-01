import { Component} from '@angular/core';

@Component({
    selector: 'login',
    template: require('./login.component.html')
})
export class LoginComponent {
    user: string;
    password: string;

    login(): void {
        console.log(`user: ${this.user} password: ${this.password}`);
    }
}
