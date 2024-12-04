import logo from './logo.svg';
import './App.css';

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Practice from './Practice';
function App() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <BrowserRouter>
       <div className='changeWidth' >
     <Routes>
   
      <Route path = "/home"    element = {<Home/>} />
      <Route path = "/contact" element = {<Contact/>} />
      <Route path = "/" element = {<Login/>} />
      <Route path = "/practice" element = {<Practice/>}/>
    </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
