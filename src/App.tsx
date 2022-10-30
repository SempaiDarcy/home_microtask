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

    const addMessage =()=>{
        console.log()
    }
 return (
     <div className={'App'}>
         <FullInput  addMessage={addMessage}/>
         {message.map((el,index)=>{
             return (
                 <div key={index}>{el.message}</div>
             )

         })}
     </div>
 )
}

export default App;
