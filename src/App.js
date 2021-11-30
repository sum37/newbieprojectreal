import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import SignPage from './pages/Sign';
import Header from './component/header';



function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/sign' element={<SignPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
