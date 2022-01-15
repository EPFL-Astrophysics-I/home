import { Link, animateScroll as scroll } from 'react-scroll';
import './Nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <Link
        to='top-of-page'
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className='nav-link'
        activeClass='nav-link-active'
      >
        TOP
      </Link>
      <Link
        to='chapter1'
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        className='nav-link'
        activeClass='nav-link-active'
      >
        CHAPTER 1
      </Link>
      <Link
        to='chapter2'
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        className='nav-link'
        activeClass='nav-link-active'
      >
        CHAPTER 2
      </Link>
      <Link
        to='chapter3'
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        className='nav-link'
        activeClass='nav-link-active'
      >
        CHAPTER 3
      </Link>
    </nav>
  );
}
