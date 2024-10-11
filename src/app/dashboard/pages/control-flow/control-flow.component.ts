import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue']);

  public toggleContent() {
    this.showContent.update((prev) => !prev);
  }

  public randomGrade() {
    const grades: Grade[] = ['A', 'B', 'C', 'D'];
    const randomIndex = Math.floor(Math.random() * grades.length);
    this.grade.set(grades[randomIndex]);
  }
}
