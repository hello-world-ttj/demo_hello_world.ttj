import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='Navbar'>
          <nav className='Nav'>
            <p className="Title"><span className='Symbol'>&#9883;</span> Tijo T Joseph <span className='Sub-title'>/ web developer</span></p> 
            <ul>
              <li>
                <Link to="/contact" className='link'>contact</Link>
              </li>
              <li>
                <Link to="/projects" className='link'>projects</Link>
              </li>
              <li>
                <Link to="/resume" className='link'>resume</Link>
              </li>
              <li>
                <Link exact to="/" className='link'>About Me</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
