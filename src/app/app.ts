import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const unusedVariable = 'This variable is not used anywhere';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('github-actions-with-angular');
}
