import { Component, OnInit } from '@angular/core';
import { facebookUser } from 'src/Dto.model/facebook.model';

@Component({
  selector: 'app-facebook-account',
  templateUrl: './facebook-account.component.html',
  styleUrls: ['./facebook-account.component.css']
})
export class FacebookAccountComponent implements OnInit {

user:facebookUser=new facebookUser()

  constructor() { }

  ngOnInit(): void {
  }

  onsubmmit(ngForm:any ){
    console.log(ngForm)

  }

}
