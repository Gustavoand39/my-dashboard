import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '@app/services/users.service';
import { TitleComponent } from '@app/shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if(user()) {
    <section>
      <img
        [srcset]="user()!.avatar"
        [alt]="user()!.first_name + ' ' + user()!.last_name"
      />

      <h2>{{ user()!.first_name }} {{ user()!.last_name }}</h2>
      <p>{{ user()!.email }}</p>
    </section>
    } @else {
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información de ${this.user()!.first_name} ${
        this.user()!.last_name
      }`;
    }

    return 'Cargando usuario...';
  });
}
