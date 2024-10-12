import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '@app/interfaces/req-res';
import { delay } from 'rxjs';

// https:reqres.in
interface IState {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<IState>({
    users: [],
    loading: true,
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(2000))
      .subscribe((response) => {
        this.#state.set({
          users: response.data,
          loading: false,
        });
      });
  }
}
