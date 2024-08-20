import { React, useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './components/navbar';
import Navbar from './components/navbar';
import Eventstab from './components/eventsTab';
import Dailyitems from './components/dailyitems';
import { FaCog } from 'react-icons/fa';

function App() {
  const [displayDaily, setdisplayDaily] = useState(true);
  const showDiv =()=>{
    setdisplayDaily(!displayDaily);
  }
  return (
    <div className="App flex box-border sm:w-full">
      <Navbar name = {"Austin Ng'ang'a"}/>
      <main className="flex-1 flex-col sm:w-full h-9/12 bg-gray-50 sm:overflow-x-hidden">
        
        {window.innerWidth < 768 ?
        (
        <>
           <FaCog onClick={showDiv}/>
            {displayDaily
              ?
              <Dailyitems name = {"June"} items_count    ={15}/>
              :
              <Eventstab events_count={15}/>
            }

        </>
        ) : (
        <>
            <Dailyitems name = {"June"} items_count    ={15}/>
            <Eventstab events_count={15}/>
        </>
        )};
      </main>
    </div>
  );
}


export default App;
