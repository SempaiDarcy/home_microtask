import React,{MouseEvent} from 'react';
import './App.css';

function App() {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im VASYA!')
    // }
    // const mySecondSubscriber = () => {
    //     console.log('Hello Im IVAN!')
    // }
    const onClickHandler =(name:string) => {
        console.log(name)
    }

    return (
        <div className='App'>
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={(event)=>onClickHandler('VASYA')}>MyYouTubeChanel-1</button>
            <button onClick={(event)=>onClickHandler('IVAN')}>MyYouTubeChanel-2</button>
            <button onClick={()=>onClickHandler('some info')}>MyYouTubeChanel-2</button>
        </div>
    )
}
export default App;