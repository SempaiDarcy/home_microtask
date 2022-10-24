import React from 'react';
import './App.css';
import {Cars} from "./components/Cars";
import {Girls} from "./components/Girls";
import Students from "./components/Students";



const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

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
            <Students students={students}/>
        </>
    )
}

export default App;