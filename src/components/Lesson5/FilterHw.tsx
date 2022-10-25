import React from 'react';
import {useState} from "react";

type FilterType = 'all'|'Dollars'|'RUBLS'

const FilterHw = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter,setFilter] =  useState<FilterType>('all')

    let currentMoney = money;

    if (filter==='Dollars'){
        currentMoney = money.filter(filteredMoney=>filteredMoney.banknots==='Dollars')
    }
    if (filter==='RUBLS'){
        currentMoney = money.filter(filteredMoney=>filteredMoney.banknots==='RUBLS')
    }

    const onClickFilterHandler =(nameButton:FilterType)=> {
        setFilter(nameButton)
    }
    return (
        <div>
            {money.map((objFromMoney,index)=>{
                return (
                    <ul key={index}>
                        <span>{objFromMoney.banknots} </span>
                        <span>{objFromMoney.value} </span>
                        <span>{objFromMoney.number} </span>
                    </ul>
                )
            })}
            <button onClick={()=>onClickFilterHandler('all')}>All</button>
            <button onClick={()=>onClickFilterHandler('Dollars')}>Rubles</button>
            <button onClick={()=>onClickFilterHandler('RUBLS')}>Dollars</button>
        </div>
    );
};

export default FilterHw;