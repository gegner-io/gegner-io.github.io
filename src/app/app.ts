import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly name = 'Adrian Gegner';
  protected readonly role = 'Frontend Developer building thoughtful interfaces with Angular.';
  protected readonly intro =
    'This portfolio runs on Angular and serves as the base for projects, case studies, and the stack behind them.';

  protected readonly focusAreas = [
    'Angular applications',
    'TypeScript architecture',
    'UI systems and design implementation',
  ];

  protected readonly highlights = [
    {
      label: 'Current focus',
      value: 'Building a maintainable portfolio foundation on Angular.',
    },
    {
      label: 'Stack',
      value: 'Angular 21, SCSS, GitHub Pages deployment via Actions.',
    },
    {
      label: 'Next step',
      value: 'Replace placeholders with projects, biography, and contact details.',
    },
  ];

  protected readonly links = [
    {
      label: 'GitHub',
      href: 'https://github.com/gegner-io',
    },
    {
      label: 'Angular',
      href: 'https://angular.dev',
    },
  ];
}
