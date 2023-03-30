import './About.css';

export default function About() {
  return (
    <div className='about'>
      <p className='about-feedback'>
        Help us improve by submitting (anonymous) feedback{' '}
        <a
          href='https://forms.gle/LNKZknM8C6jdMvsk7'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>
        !
      </p>
      <p>
        This website contains interactive applications for learning and
        visualising concepts in astrophysics. The apps are being developed by
        Dr. Austin Peel and Prof. Frédéric Courbin to accompany the Introduction
        to Astrophysics I course at EPFL. This project was supported by the
        Digital Resources for Instruction and Learning (
        <a href='https://www.epfl.ch/education/educational-initiatives/cede/digitaltools/dril/'>
          DRIL
        </a>
        ) Fund.
      </p>
      <p>
        We recommend viewing the apps in a <b>Chrome</b>, <b>Firefox</b>, or{' '}
        <b>Brave</b> browser window.
      </p>

      <p>
        Special thanks to Théo Damiani and Noah Kaltenrieder for their work on
        the Tidal Locking and Mass of a Globular Cluster apps!
      </p>
    </div>
  );
}
