import React from 'react';

type NewComponentType = {
    carsTop: Array<CarsType>
}

type CarsType = {
    manufacturer:string,
    model:string
}


export const NewComponent = (props:NewComponentType) => {
    return (
        <th>
            {props.carsTop.map((o,index) => {
                return (
                    <tr key={index}>
                        <span>Индекс: {index} ;</span>
                        <span> Name: {o.manufacturer} ;</span>
                        <span> Model: {o.model} ;</span>
                    </tr>
                )
                }
            )
            }
        </th>
    );
};

