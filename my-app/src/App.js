// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MyChart from './components/MyChart';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import React from 'react';
// import HighchartsReact from 'highcharts-react-official';




const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <MyChart />
    </div>
  )
}



export default App;
