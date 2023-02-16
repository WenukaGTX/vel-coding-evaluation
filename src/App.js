import 'antd/dist/reset.css';
import './app.scss';

import { Typography } from 'antd';
import Home from './components/Home/home';

const { Title } = Typography;

function App() {
  return (
    <Home />
  );
}

export default App;
