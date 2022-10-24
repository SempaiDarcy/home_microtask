import React from 'react';

type NewComponentType = {
    students:ArrStudents[];
}
type ArrStudents = {
    id:number,
    name:string,
    age:number
}

const Students = (props:NewComponentType) => {
    return (
        <div>
            <h1>Студенты</h1>
            {props.students.map((o)=>{
                return (
                    <>
                        <div key={o.id}>
                            <br/>
                            <span> Номер: {o.id};</span>
                            <span> Имя : {o.name};</span>
                            <span> Возраст: {o.age};</span>
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default Students;