import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()" />
    <pre> {{ frameworkSignal() | json }} </pre>
    <pre> {{ frameworkProperty | json }} </pre>
  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change Detection = ${this.frameworkSignal().name}`
  );

  public frameworkSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  });

  public frameworkProperty = {
    name: 'React',
    releaseDate: '2013',
  };

  constructor() {
    setTimeout(() => {
      this.frameworkSignal.update((prev) => ({
        ...prev,
        name: 'Vue',
      }));
    }, 3000);
  }
}
