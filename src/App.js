import logo from './img/dd.png';
import './App.css';
import Species from './Species';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Your Character Generator</h1>
      </header>
      <main>
        <Species/>
      </main>
    </div>
  );
}

export default App;
