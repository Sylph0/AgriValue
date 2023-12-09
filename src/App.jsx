import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import { Billing, Business, Clients } from './components';
import Model from './components/Model';
import Weather from './components/Weather';
 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/Home' element = {<Home />} />
      <Route path='/Features' element = {<Business />} />
      <Route path='/Product' element = {<Billing />} />
      <Route path='/Clients' element = {<Clients />} />
      <Route path='/Weather' element = {<Weather />} />
      <Route path='/Model' element = {<Model />} />
      <Route path='/Home/Model' element = {<Model />} />
      <Route path='/Features/Model' element = {<Model />} />

      


    </Routes>
    
    </BrowserRouter>
  )
}
export default App;
