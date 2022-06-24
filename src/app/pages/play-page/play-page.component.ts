import { Component } from '@angular/core';
import cards from 'src/app/interface/cards';
import { cardTrigger } from './play-page.animation';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss'],
  animations: [cardTrigger]
})
export class PlayPageComponent {
  cards = cards;
  playerResult: string | undefined;
  computerResult: string | undefined;
  result: string | undefined;
  score = { player: 0, computer: 0 };
  message: string | undefined;

  playerChose(action: string): void {
    this.playerResult = action
    this.computerChose()
    this.calculateWinner()
  }

  private computerChose(): void {
    const randomNumber = Math.floor(Math.random() * 5);
    const options: string[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    this.computerResult = (options[randomNumber]);
  }

  private calculateWinner(): void {
    if (this.playerResult === this.computerResult) {
    this.result = 'tie'
  }
    if (this.playerResult === 'scissors' && this.computerResult === 'paper') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'paper' && this.computerResult === 'rock') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'rock' && this.computerResult === 'lizard') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'lizard' && this.computerResult === 'spock') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'spock' && this.computerResult === 'scissors') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'scissors' && this.computerResult === 'lizard') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'paper' && this.computerResult === 'spock') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'spock' && this.computerResult === 'rock') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'rock' && this.computerResult === 'scissors') {
      this.result = 'you win'
      this.score.player ++
  }
    if (this.playerResult === 'paper' && this.computerResult === 'scissors') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.playerResult === 'rock' && this.computerResult === 'paper') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.playerResult === 'lizard' && this.computerResult === 'rock') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.playerResult === 'spock' && this.computerResult === 'lizard') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.playerResult === 'scissors' && this.computerResult === 'spock') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.playerResult === 'lizard' && this.computerResult === 'scissors') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.playerResult === 'spock' && this.computerResult === 'paper') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.playerResult === 'rock' && this.computerResult === 'spock') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.playerResult === 'scissors' && this.computerResult === 'rock') {
      this.result = 'computer wins'
      this.score.computer ++
  }
    if (this.score.computer === 5) {
      this.message = 'Sorry, try once again'
  }
    if (this.score.player === 5) {
      this.message = 'Congratulations!!! Play again?'
  }
  }
  
  playAgain(): void {
    this.score.computer = 0;
    this.score.player = 0;
    this.message = '';
    this.result = '';
    this.playerResult = '';
    this.computerResult = '';
  }
}
