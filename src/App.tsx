import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/SecondWeek/FullInput";

function App() {
    let [message,setMessage] = useState([
        {message:'message1'},
        {message:'message2'},
        {message:'message3'},
        {message:'message4'}
    ])


 return (
     <div className={'App'}>
         <FullInput  />
         {message.map((el,index)=>{
             return (
                 <div key={index}>{el.message}</div>
             )

         })}
     </div>
 )
}

export default App;
