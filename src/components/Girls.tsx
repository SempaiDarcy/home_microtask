import React from 'react';

type Girls = {
    girls:topGirls[];
}
type topGirls = {
    id:number,
    name:string,
    model:string,
    love:boolean
}

export const Girls = (props:Girls) => {
    return (
        <div>
            {props.girls.map((o)=>{
                return (
                    <div key={o.id}>
                        <li>{o.name}</li>
                    </div>
                )
            })}
        </div>
    )

};
