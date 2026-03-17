import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly name = 'Adrian';
  protected readonly role = 'Versatile developer and tech enthusiast';
  protected readonly intro =
    'I enjoy building practical solutions, from software projects to physical prototypes and rapid prototyping with 3D printing.';

  protected readonly avatarPath = 'assets/avatar.png';
  protected readonly avatarAlt = 'Portrait of Adrian';

  protected readonly skills = [
    'Python, web development and data-driven projects',
    'Rapid prototyping, 3D design and 3D printing',
    'Construction, mechanical design and hands-on engineering',
    'Automating workflows and working with sensors and APIs',
    'Quick learning of new technologies and pragmatic problem-solving',
  ];

  protected readonly currentlyExploring = [
    'Combining software and hardware for real-world projects',
    'Optimizing workflows and processes',
    'Practical applications of tech in research and engineering',
  ];

  protected readonly collaborationLine =
    'Open to collaborations, exciting projects and new challenges in software, hardware and tech innovation.';

  protected readonly links = [
    {
      label: 'GitHub',
      href: 'https://github.com/gegner-io',
      visible: true,
    },
    {
      label: 'CV',
      href: 'https://rxresu.me/gegner-io/cv',
      visible: false,
    },
  ];

  protected readonly visibleLinks = this.links.filter((link) => link.visible);
}
