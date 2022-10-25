import React,{MouseEvent} from 'react';
import './App.css';

function App() {
    const onClickHandler =(name:string) => {
        console.log(name)
    }

    return (
        <div className='App'>
            {/*<Foo/>*/}
            <button onClick={(event)=>onClickHandler('VASYA')}>MyYouTubeChanel-1</button>
            <button onClick={(event)=>onClickHandler('IVAN')}>MyYouTubeChanel-2</button>

        </div>
    )
}
export default App;