import React from 'react';

type NewComponent = {
    materials: materialsArray[];
}
type materialsArray = {
    id:number,
    name:string,
    mass:number
}

export const Build = (props:NewComponent) => {
    return (
        <div>
            {props.materials.map((objectOfNewComponent) => {
                return (
                    <ul key={objectOfNewComponent.id}>
                        <li>Порядковый номер: {objectOfNewComponent.id}</li>
                        <li>Название материала: {objectOfNewComponent.name}</li>
                        <li>Количество в кг: {objectOfNewComponent.mass}</li>
                    </ul>
                )
            })}
        </div>
    );
}

