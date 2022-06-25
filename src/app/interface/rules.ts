export interface Rules {
  picture: string;
  title: string;
}
const rules: Rules[] = [
  {
    picture: './assets/Scissors_cuts_paper.png',
    title: 'Scissors cuts Paper',
  },
  {
    picture: './assets/Paper__covers_rock.png',
    title: 'Paper covers Rock',
  },
  {
    picture: './assets/Rock_crushes_lizard.png',
    title: 'Rock crushes Lizard',
  },
  {
    picture: './assets/Lizard_poisons_spock.png',
    title: 'Lizard poisons Spock',
  },
  {
    picture: './assets/Lizard_eats_paper.png',
    title: 'Lizard eats Paper',
  },
  {
    picture: './assets/Spock_smashes_scissors.png',
    title: 'Spock smashes Scissors',
  },
  {
    picture: './assets/Scissors_decapitates_lizard.png',
    title: 'Scissors decapitates Lizard',
  },
  {
    picture: './assets/Paper_disproves_spock.png',
    title: 'Paper disproves Spock',
  },
  {
    picture: './assets/Spock_vaporizes_rock.png',
    title: 'Spock vaporizes Rock',
  },
  {
    picture: './assets/Rock_crushes_scissors.png',
    title: 'Rock crushes Scissors',
  },
];

export default rules;