import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
 addMessage:()=>void
}

export const FullInput = (props:FullInputPropsType) => {
    let [title,setTitle] = useState('')

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={()=>{}}>+</button>
        </div>
    );
};

