import './App.css';
import logo512 from './assets/logo512.png';

function App() {
  return (
    <div className="App bg-blue-200 h-screen flex items-center justify-center">
      <header className="App-header">
      
        <div>
          <img src={logo512} />
        </div>
    
        <p className="text-2xl">
          Hello Everyone!
        </p>
        <a
          className="App-link text-sm font-light"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is the weather-app starter code for Build a Website II
        </a>
      </header>
    </div>
  );
}

export default App;
