import 'antd/dist/reset.css';
import './app.scss';

import { Typography } from 'antd';
import Home from './components/home/home';

const { Title } = Typography;

function App() {
  return (
    <Home />
  );
}

export default App;
