import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    username:string = '';
    password:string = '';
    validLogins:Array<[string, string]> = [
        ['Allan', '123'],
        ['admin', 'password'],
        ['asd', '123']
    ]

    constructor(private router:Router, private forms:FormsModule) {

    }

    ngOnInit() {

    }

    loginUser(event) {
        event.preventDefault();

        this.validLogins.forEach(element => {
            if (this.username == element[0] &&
                this.password == element[1]) {
                    this.router.navigateByUrl('/account');
                }
        });
    }
}
