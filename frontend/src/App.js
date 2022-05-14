import React from 'react';
import logo from './logo.svg';
import Navigation from './components/nav';
import Header from './components/header';
import GraduateGuide from './components/graduateGuide';
import ScheduleGuide from './components/scheduleGuide';
import EmptyGuide from './components/emptyGuide';
import Navigation_other  from './components/nav_other';
import Test from './components/test';
import GraduateGuide_DEE from './components/graduateGuide_dee';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import  from 'jquery'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Navigation />
        <Routes>
          <Route path="/api/graduateGuide/cse" element={<GraduateGuide />}></Route>
          <Route path="/api/graduateGuide/dee" element={<GraduateGuide_DEE />}></Route>
          <Route path="/scheduleGuide" element={<ScheduleGuide />}></Route>
          <Route path="/emptyGuide" element={<EmptyGuide />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;