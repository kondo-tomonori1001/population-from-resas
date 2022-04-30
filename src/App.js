import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>自動デプロイをテスト！！</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button text="ボタン" />
      </header>
    </div>
  );
}

export default App;
