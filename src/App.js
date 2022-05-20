import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import { useEffect, useState } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import NavBar from './NavBar';


function App() {

  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3300)
  },[])

  return (
    <div className="App">
      {
        loading ?

        <div className='loading'>
          <PacmanLoader 
            color={'#F6BDFF'}
            loading={loading} 
            size={50} 
          />
        </div>
        :
      <Router>
          <NavBar />

          <Routes>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
      </Router>
      }
    </div>
  );
}

export default App;
