export interface Cards {
  picture: string;
  title: string;
  explanation: string;
  option: string
}
const cards: Cards[] = [
  {
    picture: '../../../assets/Scissors.png',
    title: 'Scissors',
    explanation: 'Scissors cuts Paper, Scissors decapitates Lizard',
    option: 'scissors',
  },
  {
    picture: '../../../assets/Rock.png',
    title: 'Rock',
    explanation: 'Rock crushes Lizard, Rock crushes Scissors',
    option: 'rock',
  },
  {
    picture: '../../../assets/Spock.png',
    title: 'Spock',
    explanation: 'Spock vaporizes Rock, Spock smashes Scissors',
    option: 'spock',
  },
  {
    picture: '../../../assets/Paper.png',
    title: 'Paper',
    explanation: 'Paper covers Rock, Paper disproves Spock',
    option: 'paper',
  },
  {
    picture: '../../../assets/Lizard.png',
    title: 'Lizard',
    explanation: 'Lizard poisons Spock',
    option: 'lizard',
  },
];

export default cards;