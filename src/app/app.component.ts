import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  title = 'ng-standalone';

  constructor() {}
}

