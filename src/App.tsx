import React from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {
    const Button1foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3foo = () => {
        console.log('I am stupid button')
    }
    return (
        <div className="App">
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1foo('I am Vasya', 21)}/>
            <Button name={'MyYouTubeChannel-12'} callBack={() => Button2foo('I am Vanya', 24)}/>
            <Button name={'StupidButton'} callBack={Button3foo}/>
        </div>
    );
}

export default App;
