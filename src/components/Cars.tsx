import React from 'react';

type NewComponentType = {
    carsTop: CarsType[]
}

type CarsType = {
    manufacturer:string,
    model:string
}


export const Cars = (props:NewComponentType) => {
    return (
        <div>
            {props.carsTop.map((o,index) => {
                return (
                    <tr key={index}>
                        <span>Индекс: {index};</span>
                        <span>Name: {o.manufacturer};</span>
                        <span>Model: {o.model};</span>
                    </tr>
                )
                }
            )
            }
        </div>
    );
};

