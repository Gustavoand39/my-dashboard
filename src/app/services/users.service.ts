import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { delay, map } from 'rxjs';

import type { User, UserResponse, UsersResponse } from '@app/interfaces/req-res';

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

  getUserById(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`).pipe(
      delay(2000),
      map((response) => response.data)
    );
  }
}
