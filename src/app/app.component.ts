import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../componente/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'curso Angular';

  capitalizar(): void {
    this.title =
      this.title.charAt(0).toUpperCase() + this.title.slice(1).toLowerCase();
  }
}
