import { Component } from '@angular/core';

@Component({
  selector: 'app-capitalize',
  standalone: true,
  imports: [],
  templateUrl: './capitalize.component.html',
  styleUrl: './capitalize.component.css',
})
export class CapitalizeComponent {
  title = 'curso Angular';

  capitalizar(): void {
    this.title =
      this.title.charAt(0).toUpperCase() + this.title.slice(1).toLowerCase();
  }
}
