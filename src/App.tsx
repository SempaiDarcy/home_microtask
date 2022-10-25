import React,{MouseEvent} from 'react';
import './App.css';
function App() {

    let a = 1;
    const oncClickHandler =() => {
        ++a
        console.log(a)
    }
    return (
        <div className='App'>
            <h1>{a}</h1>
            <button onClick={oncClickHandler}>number</button>
        </div>
    )
}
export default App;