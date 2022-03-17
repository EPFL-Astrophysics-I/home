import './Main.css';
import Chapter from '../Chapter/Chapter';
import gif1 from './Chapter1_Transparent.gif';
// import image1 from './Chapter1.png';
import gif2 from './Chapter2_Transparent.gif';
// import image2 from './Chapter2.png';
// import image3 from './Chapter3.png';
import video3 from './Chapter3.mp4';

const chapter1 = {
  index: 1,
  title: 'Planetary Motion',
  description:
    'Explore the motion of celestial bodies through interactive web applications. ' +
    "Understand Kepler's famous three laws of planetary motion.",
  image: gif1,
  apps: [
    'Two-Body Problem',
    "Kepler's First Law",
    "Kepler's Second Law",
    "Kepler's Third Law",
  ],
  status: ['Complete', 'Complete', 'Complete', 'Complete'],
  link: 'https://epfl-astrophysics-i.github.io/chapter1/',
};

const chapter2 = {
  index: 2,
  title: 'Tidal Forces',
  description:
    "Visualize tidal forces on Earth arising from the Moon's gravitational pull. " +
    "Explore the physical mechanism behind the formation of Saturn's rings.",
  image: gif2,
  apps: ['Tidal Forces', 'Roche Limit', 'Tidal Locking'],
  status: ['Complete', 'InProgress', 'InProgress'],
  link: 'https://epfl-astrophysics-i.github.io/chapter2/',
};

const chapter3 = {
  index: 3,
  title: 'Virial Theorem',
  description:
    'Discover how kinetic and potential energy are related in systems containing many gravitating bodies. ' +
    'See how we can weigh massive and distant celestial objects.',
  // image: image3,
  video: video3,
  apps: ['Virial Theorem', 'Mass of a Globular Cluster', 'N-Body Accuracy'],
  status: ['Complete', 'InProgress', 'InProgress'],
  link: 'https://epfl-astrophysics-i.github.io/chapter3/',
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
