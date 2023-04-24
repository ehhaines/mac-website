// import logo from './logo.svg';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import HomeComponent from './Home';
import EnrollmentComponent from './Enrollment';
import NavComponent from './Nav';
import AboutComponent from './About';
import ResourcesComponent from './Resources';

function App() {
  return (
    <BrowserRouter>
      <NavComponent/>
      <div className="App">
        <Routes>
          <Route path='/*' element={<HomeComponent/>}/>
          <Route path='/enrollment' element={<EnrollmentComponent/>}/>
          <Route path='/about' element={<AboutComponent/>}/>
          <Route path='/resources' element={<ResourcesComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
