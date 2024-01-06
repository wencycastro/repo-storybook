import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

interface User {
  id: number;
  fullName: string;
  email: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  totalUsers: number = 0;
  totalBooks: number = 0; 

  constructor(private userService: SharedService) {}


  selectedUserId: number | null = null;
  fullName: string = '';
  email: string = '';

  editedFullName: string = '';
  editedEmail: string = '';

  addUser(): void {
    const newUser: User = { id: this.generateUserId(), fullName: this.fullName, email: this.email };
    this.users.push(newUser);
    this.resetForm();
  }

  editUser(userId: number): void {
    this.selectedUserId = userId;
    const userToEdit = this.users.find(user => user.id === userId);
    if (userToEdit) {
      this.editedFullName = userToEdit.fullName;
      this.editedEmail = userToEdit.email;
    }
  }

  updateUser(): void {
    const userIndex = this.users.findIndex(user => user.id === this.selectedUserId);
    if (userIndex !== -1) {
      this.users[userIndex].fullName = this.editedFullName;
      this.users[userIndex].email = this.editedEmail;
      this.selectedUserId = null;
      this.resetForm();
    }
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
    this.resetForm();
  }

  private generateUserId(): number {
    return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
  }

  private resetForm(): void {
    this.fullName = '';
    this.email = '';
    this.editedFullName = '';
    this.editedEmail = '';
  }
  
  users: any[] = [];
 ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.users = response.users;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );

    this.userService.getTotalCounts().subscribe(
      (response) => {
        this.totalUsers = response.totalUsers;
        this.totalBooks = response.totalBooks; // Update the property with the total books count
      },
      (error) => {
        console.error('Error fetching total counts', error);
      }
    );
  }

  removeUser(userId: string): void {
    this.userService.removeUser(userId).subscribe(
      () => {
        console.log('User removed successfully');
        // Refresh the user list or update as needed
        this.ngOnInit();
      },
      (error) => {
        console.error('Error removing user', error);
      }
    );
  }
  
}
