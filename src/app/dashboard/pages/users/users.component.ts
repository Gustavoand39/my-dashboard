import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@app/services/users.service';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
