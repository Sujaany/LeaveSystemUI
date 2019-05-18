import { InteractionService } from 'src/app/services/interaction.service';
import { TokenStorageService } from './services/login/token-storage.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private token: TokenStorageService,
    private interactionService: InteractionService) { }
  title = 'hrm-system-frontend';
  loggedIn= 'false';
  info: any;
  role: string;
  userName: string;
  userId: number;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.interactionService.sendUserInfo(this.info);
    this.role = this.info.authorities;
    this.userName=this.info.username;
  }
 
}

