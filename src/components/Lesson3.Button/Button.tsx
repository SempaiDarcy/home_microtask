import React from 'react';
import {UniversalButton} from "./UniversalButton";

const Button = () => {
    const Button1Foo =(subscriber:string, age:number,address:string)=> {
        console.log(subscriber,age,address)
    }
    const Button2Foo =(subscriber:string,age:number,address:string)=> {
        console.log(subscriber,age,address)
    }
    const Button3Foo =()=> {
        console.log('I am stupid bottom')
    }
    return (
        <div>
            <UniversalButton name = {'YouTubeChannel-1'} callBack={()=>Button1Foo('I am VASYA',16,'I am live in Moscow')}/>
            <UniversalButton name = {'YouTubeChannel-2'} callBack={()=>Button2Foo('I am IVAN',23,'I am live in Kiev')}/>
            <UniversalButton name = {'YouTubeChannel-3'} callBack={Button3Foo}/>
        </div>
    );
};

export default Button;