import { Button } from 'antd';
import 'antd/dist/reset.css';
import logo from './logo.svg';
import { Col, Row } from 'antd';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-6'>Left side</div>
          <div className='col-6'>Right side</div>
        </div>
      </div>
    </div>
  );
}

export default App;
