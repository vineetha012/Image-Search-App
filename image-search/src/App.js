import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import HomePage from './components/homepage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { BookMarkContainer } from './components/bookmark';
import Bkmarkimgcontext from './components/bkmarkcontext';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/bookmark' element={<BookMarkContainer/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
