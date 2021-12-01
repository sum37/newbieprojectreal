import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import SignPage from './pages/Sign';
// import Header from './component/header';
import MainPage from './pages/main';
import JoinPage from './pages/join';
import WritePage from './pages/write';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/sign' element={<SignPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/write' element={<WritePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
