import React, {useState} from 'react';

const UseState = () => {

    // let a = 1;
    let[a,setA] = useState(1);
    const oncClickHandler =() => {
        setA(++a)
        console.log(a)
    }
    const onClickDelete=()=>{
        setA(0)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={oncClickHandler}>number</button>
            <button onClick={onClickDelete}>0</button>
        </div>
    )
}
export default UseState;