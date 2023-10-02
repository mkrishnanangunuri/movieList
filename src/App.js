import React from 'react';
import Signup from './signup';
import Login from './login';
import MovieList from './list';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CompanyInfo from './company';

function App() {
  return (
    // <Signup/>
    // <Login/>
    // <MovieList/>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<MovieList/>} />
        <Route path="/company" element={<CompanyInfo />} />
      </Routes>
    </BrowserRouter>
   );
}

export default App;
