import './Main.css';
import Chapter from '../Chapter/Chapter';

const chapter1 = {
  id: 'chapter1',
  index: '1',
  title: 'PLANETARY MOTION',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const chapter2 = {
  id: 'chapter2',
  index: '2',
  title: 'TIDAL FORCES',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const chapter3 = {
  id: 'chapter3',
  index: '3',
  title: 'VIRIAL THEOREM',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
