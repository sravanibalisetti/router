import './App.css';
import React from 'react'
import Navbar from './Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Jhansi from './Jhansi';
import Sindhu from './Sindhu';
import Usain from './Usain';

function App() {
  return (
   
    <div>
             <BrowserRouter>
      <Navbar />
    

<Routes>

  <Route path='/' element={<Home/>}></Route>
  <Route path='/jhansi' element={<Jhansi />}></Route>
  <Route path='/sindhu' element={<Sindhu />}></Route>
  <Route path='/usain'  element={<Usain />}></Route>

  </Routes>
  </BrowserRouter>  

    </div>
    
  );
}

export default App;
