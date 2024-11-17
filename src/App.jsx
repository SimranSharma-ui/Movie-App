import React from 'react';
import Home from './componants/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MovieDetail from './componants/MovieDetail';
import Header from './componants/Header';


const App = () => {
  return (
    <div className='bg-gradient-to-r from-purple-300 to-purple-600'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:id' element={<MovieDetail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;