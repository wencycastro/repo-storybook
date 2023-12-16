import { Component } from '@angular/core';

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
export class AdminDashboardComponent {
  users: User[] = [
    { id: 1, fullName: 'John Doe', email: 'john@example.com' },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com' }
  ];

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
  
}
