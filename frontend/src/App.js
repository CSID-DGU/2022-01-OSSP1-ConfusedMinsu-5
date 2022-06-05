import React, {useState} from 'react';
import logo from './logo.svg';
import Navigation from './components/nav';
import Header from './components/header';
import GraduateGuide_Main from "./components/graduateGuide_main";
import GraduateGuide_CSE from './components/graduateGuide_cse';
import GraduateGuide_ENE from './components/graduateGuide_ene';
import GraduateGuide_ISE from './components/graduateGuide_ise';
import GraduateGuide_EME from './components/graduateGuide_eme';
import GraduateGuide_INC from './components/graduateGuide_inc';
import GraduateGuide_CEN from './components/graduateGuide_cen';
import GraduateGuide_ARC from './components/graduateGuide_arc';
import GraduateGuide_ARD from "./components/graduateGuide_ard";
import GraduateGuide_CIV from "./components/graduateGuide_civ";
import GraduateGuide_MEC from "./components/graduateGuide_mec";
import GraduateGuide_MME from "./components/graduateGuide_mme";
import ScheduleGuide from './components/scheduleGuide';
import EmptyGuide from './components/emptyGuide';
import Navigation_other from './components/nav_other';
import Test from './components/test';
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
              <Route path="/" element={<Main/>}></Route>
              <Route path="/graduateGuide_main"
                     element={<GraduateGuide_Main/>}></Route>
              <Route path="/api/graduateGuide/ard"
                     element={<GraduateGuide_ARD/>}></Route>
              <Route path="/api/graduateGuide/civ"
                     element={<GraduateGuide_CIV/>}></Route>
              <Route path="/api/graduateGuide/mec"
                     element={<GraduateGuide_MEC/>}></Route>
              <Route path="/api/graduateGuide/mme"
                     element={<GraduateGuide_MME/>}></Route>
              <Route path="/api/graduateGuide/cse"
                     element={<GraduateGuide_CSE/>}></Route>
              <Route path="/api/graduateGuide/ene"
                     element={<GraduateGuide_ENE/>}></Route>
              <Route path="/api/graduateGuide/arc"
                     element={<GraduateGuide_ARC/>}></Route>
              <Route path="/api/graduateGuide/cen"
                     element={<GraduateGuide_CEN/>}></Route>
              <Route path="/api/graduateGuide/ise"
                     element={<GraduateGuide_ISE/>}></Route>
              <Route path="/api/graduateGuide/eme"
                     element={<GraduateGuide_EME/>}></Route>
              <Route path="/api/graduateGuide/inc"
                     element={<GraduateGuide_INC/>}></Route>
              <Route path="/scheduleGuide" element={<ScheduleGuide/>}></Route>
              <Route path="/scheduleGuide/scheduleTable"
                     element={<ScheduleTable/>}></Route>
              <Route path="/emptyGuide" element={<EmptyGuide/>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>

  );
}

export default App;