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
      icon: 'fa-solid fa-book-open',
      routerLink: 'manage/dashboard'
    },
    {
      number: '2',
      name: 'Books',
      icon: 'fa-solid fa-book',
      routerLink: 'manage/approvedbooks'
    },
    {
      number: '3',
      name: 'Pending books',
      icon: 'fa-solid fa-check',
      routerLink: 'manage/pendingbooks'
    }
  ]
  list_2 = [
    {
      number: '1',
      name: 'Writers',
      icon: 'fa-solid fa-pen-nib',
      routerLink: 'manage/writers'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
