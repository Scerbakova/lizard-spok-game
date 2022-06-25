import { Component } from '@angular/core';
import cards from 'src/app/interface/cards';
import { cardTrigger } from './play-page.animation';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss'],
  animations: [cardTrigger],
})
export class PlayPageComponent {
  cards = cards;
  playerResult: string | undefined;
  computerResult: string | undefined;
  message: string | undefined;
  result: string | undefined;
  score = { player: 0, computer: 0 };
  options: string[] = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  playerChose(action: string): void {
    this.playerResult = action;
    this.computerChose();
    this.calculateWinner();
    this.messageWinner();
  }

  private computerChose(): void {
    const randomNumber = Math.floor(Math.random() * 5);
    const options = this.options;
    this.computerResult = options[randomNumber];
  }

  private calculateWinner(): void {
    const playerWinsCaseOne =
      this.playerResult === 'scissors' && this.computerResult === 'paper';
    const playerWinsCaseTwo =
      this.playerResult === 'scissors' && this.computerResult === 'lizard';
    const playerWinsCaseThree =
      this.playerResult === 'paper' && this.computerResult === 'rock';
    const playerWinsCaseFour =
      this.playerResult === 'paper' && this.computerResult === 'spock';
    const playerWinsCaseFive =
      this.playerResult === 'rock' && this.computerResult === 'lizard';
    const playerWinsCaseSix =
      this.playerResult === 'rock' && this.computerResult === 'scissors';
    const playerWinsCaseSeven =
      this.playerResult === 'lizard' && this.computerResult === 'spock';
    const playerWinsCaseEight =
      this.playerResult === 'lizard' && this.computerResult === 'paper';
    const playerWinsCaseNine =
      this.playerResult === 'spock' && this.computerResult === 'scissors';
    const playerWinsCaseTen =
      this.playerResult === 'spock' && this.computerResult === 'rock';

    if (this.playerResult === this.computerResult) {
      this.result = 'tie';
    }
    else if (
      playerWinsCaseOne ||
      playerWinsCaseTwo ||
      playerWinsCaseThree ||
      playerWinsCaseFour ||
      playerWinsCaseFive ||
      playerWinsCaseSix ||
      playerWinsCaseSeven ||
      playerWinsCaseEight ||
      playerWinsCaseNine ||
      playerWinsCaseTen
    )
    {
      this.result = 'you win';
      this.score.player++;
    } else {
      this.result = 'computer wins';
      this.score.computer++;
    }
  }

  private messageWinner(): void {
    if (this.score.computer === 5) {
      this.message = 'Sorry, try once again';
    }
    if (this.score.player === 5) {
      this.message = 'Congratulations!!! Play again?';
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
