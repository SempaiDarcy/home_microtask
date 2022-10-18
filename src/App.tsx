import React from 'react';
import './App.css';
import NewComponent from "./NewComponent";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    // const MyFirstSubscriber = ()=>{
    //     console.log('Hello, I am a Vasya')
    // }
    // const MySecondSubscriber = ()=>{
    //     console.log('Hello, I am Ivan')
    // }
    //
    // const onclickHandler = (name:string) => {
    //     console.log(name)
    // }
    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (number:number) => {
        console.log(number)
    }
  return (
    <div>
        <NewComponent topCars={topCars}/>
        {/*<button onClick={(event)=>{console.log('Hellow')}}>MyYouTubeChannel-1</button>*/}
        {/*<button onClick={()=>onclickHandler('Vasya')}>MyYouTubeChannel-1</button>*/}
        {/*<button onClick={()=>onclickHandler('Ivan')}>MyYouTubeChannel-2</button>*/}
        <button onClick={foo1}>1</button>
        <button onClick={()=>foo2(100200)}>2</button>
    </div>
  );
}

export default App;
