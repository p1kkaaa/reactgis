import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import News from './components/News';
import Parallax from './components/Parallax';
import Projects from './components/Project';
import Services from './components/Services';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Parallax/>
      <News/>
      <Services/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
