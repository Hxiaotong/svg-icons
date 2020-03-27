import React from 'react';
import './App.css';
import {Coinmarketcap, Facebook, Instagram, Telegram, Twitter, Youtube} from './icons/index'

function App() {
  return (
    <div className="App">
      <Coinmarketcap style={{ fontSize: '100px', color: '#08c' }}></Coinmarketcap>
      <Facebook style={{ fontSize: '100px', color: '#08c' }}></Facebook>
      <Instagram style={{ fontSize: '100px', color: '#08c' }}></Instagram>
      <Telegram style={{ fontSize: '100px', color: '#08c' }}></Telegram>
      <Twitter style={{ fontSize: '100px', color: '#08c' }}></Twitter>
      <Youtube style={{ fontSize: '100px', color: '#08c' }}></Youtube>
    </div>
  );
}

export default App;
