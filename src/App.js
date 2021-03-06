import logo from './icons/logo.svg';
import './styles/App.css';
import Nav from './components/nav'
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
