import './App.css'
import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './screens/dashboard/dashboard';
import Project from './screens/projects/project';
import Login from './screens/login/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/projets" element={<Project/>} />
        <Route path="/login" element={<Login/>} />


      </Routes>
        
    </div>
  );
}

export default App;
