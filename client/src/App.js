import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes, useSubmit} from 'react-router-dom'
import PlayerFrom from './components/PlayerFrom';
import AllPlayers from './components/AllPlayers';
import { useState } from 'react';
import PLayerStatus from './components/PLayerStatus';
import Nav from './components/Nav';
function App() {
  //lifted state and passed the setter function to all three components and then we manualy set the status
  const [managePlayerStatus,setManagePlayerStatus]= useState(false)//have to add it into props on app players components
  //have to also pass it into the form since this nav is appearing there as well
  const[listPageIsActive,setListPageIsActive] =useState(true)

  return (
    <div >
      <BrowserRouter>
      <Nav managePlayerStatus={managePlayerStatus} setManagePlayerStatus={setManagePlayerStatus}></Nav>
      <Routes>
        <Route element={<AllPlayers 
                            listPageIsActive={listPageIsActive} 
                            setListPageIsActive={setListPageIsActive}
                            setManagePlayerStatus={setManagePlayerStatus}/>} 
                            path ="/players/list" default/>
        <Route element={<PlayerFrom 
                            listPageIsActive={listPageIsActive} 
                            setListPageIsActive={setListPageIsActive}
                            setManagePlayerStatus={setManagePlayerStatus}/>} 
                            path ="/players/addplayer"/>
        < Route element={<PLayerStatus setManagePlayerStatus={setManagePlayerStatus} />} path="/status/game/:gameId" /> 
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
