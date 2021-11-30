import React from 'react';
import {BrowserRouter as Routes, Route} from 'react-router-dom';
import './App.css';
// import Header from './component/header';
// import Login from './component/login';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/profile' component={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
