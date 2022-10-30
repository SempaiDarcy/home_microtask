import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/SecondWeek/FullInput";
import {Input} from "./components/SecondWeek/Input";
import {Button} from "./components/SecondWeek/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

     let [title,setTitle]=useState('')
    console.log(title)

    const callBackButtonHandler = () => {
       addMessage(title)
        setTitle('')
    }

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])
    }

    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle = {setTitle} title={title}/>
            <Button name={'+'} callBack={()=>{callBackButtonHandler()}}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>
                        {el.message}
                    </div>
                )
            })}
        </div>
    )
}

export default App;
