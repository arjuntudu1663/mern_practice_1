import logo from './logo.svg';
import './App.css';

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path = "/home"    element = {<Home/>} />
      <Route path = "/contact" element = {<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
