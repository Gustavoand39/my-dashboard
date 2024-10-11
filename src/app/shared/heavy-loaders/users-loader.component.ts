import { Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [],
  template: `<p>Loading users...</p>`,
})
export class UsersLoaderComponent {
  constructor() {}
}
