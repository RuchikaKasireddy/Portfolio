import './App.css';
import BurgerMenu from './BurgerMenu';
import Intro from './Intro';
import About from './About';
import Work from './Work';

function App() {
  return (
    <div className="main">
      <BurgerMenu />
      <Intro />
      <About />
      <Work />
    </div>
  )
}

export default App;
