import React, {useState} from 'react';
import {FullInput} from "./Inputs/FullInput";

const Message = () => {
    let [message,setMessage] = useState([
        {message:'message1'},
        {message:'message2'},
        {message:'message3'},
        {message:'message4'}
    ])

    const addMessage = (title:string) => {
        let newMessage = {message:title}
        setMessage([newMessage,...message])
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
};

export default Message;