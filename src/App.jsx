import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routter from './router/Router';


const App = () => {
  return (
    <BrowserRouter>
      <Routter />
    </BrowserRouter>
  );
};

export default App;
