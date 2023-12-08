import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{
@Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-house-user',
      routerLink: 'manage/dashboard'
    },
    {
      number: '2',
      name: 'User List',
      icon: 'fa-solid fa-users',
      routerLink: 'manage/users'
    },
    {
      number: '3',
      name: 'Approved books',
      icon: 'fa-solid fa-check',
      routerLink: 'manage/approvedbooks'
    },
    {
      number: '4',
      name: 'Pending books',
      icon: 'fa-solid fa-spinner',
      routerLink: 'manage/pendingbooks'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
