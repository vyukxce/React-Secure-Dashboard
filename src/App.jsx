import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login/>}/>

        {/* Protected */}
         <Route path="/" element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
