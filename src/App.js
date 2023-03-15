// import logo from './logo.svg';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import HomeComponent from './Home';
import NavComponent from './Nav';

function App() {
  return (
    <div className="App">
      <NavComponent/>
      <HomeComponent/>
    </div>
  );
}

export default App;
