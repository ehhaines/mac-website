// import logo from './logo.svg';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import HomeComponent from './Home';
import NavComponent from './Nav';

function App() {
  return (
    <BrowserRouter>
      <NavComponent/>
      <div className="App">
        <Routes>
          <Route path='/*' element={<HomeComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
