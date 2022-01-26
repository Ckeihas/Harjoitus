
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//import CountryData from './components/CountryData';
import Navbar from './components/Navbar';
import Suomi from './components/pages/Suomi';
import Ruotsi from './components/pages/Ruotsi';
import Norja from './components/pages/Norja';



function App() {

  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Suomi" element={<Suomi />}/>
        <Route path="/Ruotsi" element={<Ruotsi />}/>
        <Route path="/Norja" element={<Norja />}/>
      </Routes>
    </Router>
  )
}

export default App;
