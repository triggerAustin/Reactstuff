import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './components/navbar';
import Navbar from './components/navbar';
import Eventstab from './components/eventsTab';
import Dailyitems from './components/dailyitems';

function App() {
  return (
    <div className="App flex box-border">
      <Navbar name = {"Austin Ng'ang'a"}/>
      <main className="flex-1 flex-col w-10/12 h-9/12 bg-gray-50">
        <Dailyitems name = {"June"} items_count={15}/>
        <Eventstab events_count={15}/>
      </main>
    </div>
  );
}

export default App;
