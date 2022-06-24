import { Component } from '@angular/core';
import rules from 'src/app/interface/rules';
import { rulesTrigger } from './home-page.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [rulesTrigger],
})
export class HomePageComponent {
  audio = new Audio();
  isVisible = false;
  rules = rules

  playSound(): void {
    this.audio.src = '../assets/The Big Bang Theory - Full.mp3';
    this.audio.load();
    this.audio.play();
  }
  
  stopSound(): void {
    this.audio.pause();
  }
}
