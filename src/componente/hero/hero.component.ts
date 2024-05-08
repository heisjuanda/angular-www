import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  activado: boolean = true;
  desactivado: boolean = false;

  heroes: string[] = ['Thor', 'Steve', 'Tony'];

  heroes_list: any[] = [
    { name: 'Peter', power: 'Fly' },
    { name: 'Lissa', power: 'Fire' },
  ];
}
