import './Main.css';
import Chapter from '../Chapter/Chapter';
import image1 from './Chapter1.png';
import image2 from './Chapter2.png';
import image3 from './Chapter3.png';

const chapter1 = {
  index: 1,
  title: 'Planetary Motion',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: image1,
  apps: [
    'Two-Body Problem',
    "Kepler's First Law",
    "Kepler's Second Law",
    "Kepler's Third Law",
  ],
};

const chapter2 = {
  index: 2,
  title: 'Tidal Forces',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: image2,
  apps: ['Tidal Forces', 'Roche Limit', 'Tidal Locking'],
};

const chapter3 = {
  index: 3,
  title: 'Virial Theorem',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: image3,
  apps: ['Virial Theorem', 'Mass of a Globular Cluster', 'N-Body Accuracy'],
};

export default function Main() {
  return (
    <main className='content'>
      <Chapter props={chapter1} />
      <Chapter props={chapter2} />
      <Chapter props={chapter3} />
    </main>
  );
}
