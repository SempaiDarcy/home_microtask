import React, {useState} from 'react';
import './App.css';

// import {Button} from "./Components/Button";

function App() {
    // const Button1foo = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    // const Button2foo = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    // const Button3foo = () => {
    //     console.log('I am stupid button')
    // }
    // let [a,setA]=useState(1)
    // const onclickHandler = () => {
    //     setA(++a);
    //     console.log(a)
    // }
    // const onclickHandler2= () =>{
    //     setA(0);
    // }
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let currentMoney=money.filter((filteredMoney)=>filteredMoney.banknots==='Dollars')

    return (
        <div className="App">
            <ul>
                {currentMoney.map((objFromMonArr,index) => {
                    return (

                        <li key={index}>
                            <span> {objFromMonArr.banknots}</span>
                            <span> {objFromMonArr.value}</span>
                            <span> {objFromMonArr.number}</span>
                        </li>

                )
                })
                }
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={oncklickFilterHandler}>all</button>
                <button onClick={oncklickFilterHandler}>rubles</button>
                <button onClick={oncklickFilterHandler}>dollars</button>
            </div>
            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onclickHandler}>number</button>*/}
            {/*<button onClick={onclickHandler2}>0</button>*/}
            {/*<Button name={'MyYouTubeChannel-1'} callBack={() => Button1foo('I am Vasya', 21)}/>*/}
            {/*<Button name={'MyYouTubeChannel-12'} callBack={() => Button2foo('I am Vanya', 24)}/>*/}
            {/*<Button name={'StupidButton'} callBack={Button3foo}/>*/}
        </div>
    );
}

export default App;
