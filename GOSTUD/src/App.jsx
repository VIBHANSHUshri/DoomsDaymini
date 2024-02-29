import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import { FrontPage } from './pages/FrontPage';
import Layout from './Layout';

function App() {
  return (
     //i had use the layout here for the navbar
    <Router>
    <Routes>
 
      <Route 
      path="/" 
      element={<Layout />}
      >
      <Route index element={<FrontPage />} />
      <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  </Router>
    
  )
}

export default App
