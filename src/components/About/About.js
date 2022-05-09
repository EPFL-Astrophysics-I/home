import './About.css';

export default function About() {
  return (
    <div className='about'>
      <p>
        This website contains interactive applications for learning and
        visualizing concepts in astrophysics. The apps are being developed by
        Prof. Frédéric Courbin and Dr. Austin Peel to accompany the Introduction
        to Astrophysics I course at EPFL. This project is supported by the
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
    </div>
  );
}
