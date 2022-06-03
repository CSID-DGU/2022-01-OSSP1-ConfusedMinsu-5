import React ,{useState}from 'react';
import logo from './logo.svg';
import Navigation from './components/nav';
import Header from './components/header';
import GraduateGuide from './components/graduateGuide';
import ScheduleGuide from './components/scheduleGuide';
import EmptyGuide from './components/emptyGuide';
import Navigation_other  from './components/nav_other';
import Test from './components/test';
import GraduateGuide_DEE from './components/graduateGuide_dee';
import ScheduleTable from './components/scheduleTable';
import Main from './components/main';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import  from 'jquery'
import './App.css';

function App() {

  return (
    <div className="d-flex justify-content-center">
        <div className="App">

<BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Main />}></Route>
    <Route path="/api/graduateGuide/cse" element={<GraduateGuide />}></Route>
    <Route path="/api/graduateGuide/ene" element={<GraduateGuide_DEE />}></Route>
    <Route path="/scheduleGuide" element={<ScheduleGuide />}></Route>
    <Route path="/scheduleGuide/scheduleTable" element={<ScheduleTable />}></Route>
    <Route path="/emptyGuide" element={<EmptyGuide />}></Route>
  </Routes>
</BrowserRouter>
      </div>
    </div>
    
  );
}

export default App;