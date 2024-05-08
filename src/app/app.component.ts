import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../componente/hero/hero.component';
import { AddHeroComponent } from '../componente/heroes/add-hero/add-hero.component';
import { NavigationComponent } from '../componente/navigation/navigation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, AddHeroComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
