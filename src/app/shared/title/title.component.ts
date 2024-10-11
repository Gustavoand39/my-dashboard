import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1 class="text-3xl font-bold mb-5">{{ title }}</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
