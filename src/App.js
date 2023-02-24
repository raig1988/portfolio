import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import NoPage from './components/NoPage';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import {Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <Routes>
      <Route index element={<Homepage />}></Route>
      <Route path="/about" element={<AboutMe />}></Route>
      <Route path="/certifications" element={<Certifications />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<ContactMe />}></Route>
      <Route path="*" element={<NoPage />}></Route>
    </Routes>
  );
}

export default App;
