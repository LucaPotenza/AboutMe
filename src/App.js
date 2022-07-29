import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import NavBar from './NavBar'
import Home from './section/Home';
import Portfolio from './section/Portfolio';
import End from './section/End';

function App() {

  return (
    <div className="App bg-dark">
      <NavBar/>
      <header className="scroller" id="container">
        <Home/>
        <Portfolio/>
        <End/>
      </header>
    </div>
  );
}

export default App;
