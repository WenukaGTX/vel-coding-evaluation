import { Button } from 'antd';
import 'antd/dist/reset.css';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
