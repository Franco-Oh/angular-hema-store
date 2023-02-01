import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usersData:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.usersData.logout();
    this.router.navigate(['/login'])
  }

}
