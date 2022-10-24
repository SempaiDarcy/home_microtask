import React,{MouseEvent} from 'react';
import './App.css';

function App() {
    const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log('Hello Im VASYA!')
    }
    const mySecondSubscriber = () => {
        console.log('Hello Im IVAN!')
    }

    return (
        <div className='App'>
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>
            <button onClick={mySecondSubscriber}>MyYouTubeChanel-2</button>
        </div>
    )
}
export default App;