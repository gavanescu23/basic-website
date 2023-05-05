import Analytics from './components/Analytics';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import NewsLetter from './components/NewsLetter';
import FancyCards from './components/FancyCards';
import Footer from './components/Footer'
import './index.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <FancyCards/>
      <Footer/>
    </div>
  );
}

export default App;
