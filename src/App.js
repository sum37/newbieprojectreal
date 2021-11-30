import './App.css';
import Header from './component/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './component/login';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Login />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
