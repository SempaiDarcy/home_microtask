import React from 'react';
import './App.css';
import {Cars} from "./components/Cars";
import {Girls} from "./components/Girls";



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
            <Cars carsTop={topCars}/>
            <Girls girls={topGirls}/>
        </>
    )
}

export default App;