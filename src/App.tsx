import React from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";



const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {
    return (
        <>
            <NewComponent carsTop={topCars}/>
        </>
    )
}

export default App;