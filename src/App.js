import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/About/About';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Title />
      <About />
      <Main />
      <Footer />
    </div>
  );
}
