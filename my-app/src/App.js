// import logo from './logo.svg';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile postData={props.appState.postData} />} />
            <Route /*exact*/ path='/dialogs/*' element={<Dialogs dialogsData={props.appState.dialogsData} messagesData={props.appState.messagesData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}



export default App;
