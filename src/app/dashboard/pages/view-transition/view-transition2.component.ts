import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex flex-row-reverse items-center justify-start gap-4">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="dog"
        width="200"
        height="300"
        style="view-transition-name: dog-1"
        loading="eager"
      />

      <h2
        style="view-transition-name: text-1"
        class="text-2xl font-bold text-gray-800"
      >
        This is a dog with a different layout
      </h2>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent {}
