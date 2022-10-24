import React from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";



const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

const topGirls = [
    {id:1, name:'Inna', model:'crazyGirl', love:true},
    {id:2, name:'Dasha', model:'middleGirl', love:false},
    {id:3, name:'Masha', model:'myDreamGirl', love:true},
]

function App() {
    return (
        <>
            <NewComponent carsTop={topCars}/>
        </>
    )
}

export default App;