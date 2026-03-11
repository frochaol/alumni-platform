import { Component } from '@angular/core';
import { PublicHeader } from './public-header/public-header';
import { PublicFooter } from './public-footer/public-footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [PublicHeader, PublicFooter, RouterOutlet],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {}
