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
          <nav className='navbar'>
            <div className="container">
              <div className="logo"><span className='symbol'>&#9883;</span> Tijo T Joseph <span className='sub-title'>/ web developer</span></div>
              <ul>
              <li>
                <Link exact to="/" className='link'>About Me</Link>
              </li>
              <li>
                <Link to="/resume" className='link' >resume</Link>
              </li>
              <li>
                <Link to="/projects" className='link' >projects</Link>
              </li>
              <li>
                <Link to="/contact" className='link' >contact</Link>
              </li>
            </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
