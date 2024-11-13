import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Project from './component/Project';
import Skills from './component/Skills';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <About />
        <Project /> 
        <Skills />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
