import React, {useState} from 'react';

type FilterType = 'all' | 'dollar' | 'ruble'

export function Filter () {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    const [filter,setFilter]=useState<FilterType>('all')

    let currentMoney = money;
    if(filter === 'dollar'){
        currentMoney = money.filter(filteredMoney=>filteredMoney.banknote==='dollar')
    }
    if(filter === 'ruble'){
        currentMoney = money.filter(filteredMoney=>filteredMoney.banknote==='ruble')
    }

    const onClickFilterHandler = (nameButton:FilterType)=>{
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <>
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote} </span>
                                <span>{objFromMoneyArr.nominal} </span>
                                <span>{objFromMoneyArr.number} </span>
                            </li>
                        </>
                    )
                })}
            </ul>
            <button onClick={()=>onClickFilterHandler('all')}>All</button>

            <button onClick={()=>onClickFilterHandler('ruble')}>Rubles</button>

            <button onClick={()=>onClickFilterHandler('dollar')}>Dollars</button>
        </>

    );
}
