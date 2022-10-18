import React from 'react';
import './App.css';
import NewComponent from "./NewComponent";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    const MyFirstSubscriber = ()=>{
        console.log('Hello')
    }

  return (
    <div>
        <NewComponent topCars={topCars}/>
        <button onClick={(event)=>{console.log('Hellow')}}>MyYouTubeChannel-1</button>
        <button onClick={MyFirstSubscriber}>MyYouTubeChannel-2</button>
    </div>
  );
}

export default App;
