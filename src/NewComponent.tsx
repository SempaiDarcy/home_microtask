import React from 'react';

type NewComponentType = {
    topCars:CarsType[]
}

type CarsType = {
    manufacturer:string,
    model:string
}

const NewComponent = (props:NewComponentType) => {

    return (
        <div>
            <ul>
                {props.topCars.map((objectFromCarsArray,index)=>{
                    debugger
                    return (
                        <table>
                            <tr key={index}>
                                <th>{objectFromCarsArray.manufacturer}</th>
                                <th>{objectFromCarsArray.model}</th>
                            </tr>

                        </table>
                    )
                })}
            </ul>
        </div>
    );
};

export default NewComponent;