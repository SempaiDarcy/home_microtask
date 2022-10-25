import React from 'react';

const onClickHandler =(name:string) => {
    console.log(name)
}
const foo1 =()=> {
    console.log(100200)
}
const foo2 =(number:number)=> {
    console.log(number)
}
export const Foo = () => {
    return (
        <div>
            <button onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel-1</button>
            <button onClick={()=>onClickHandler('some info')}>MyYouTubeChanel-3</button>
            <button onClick={()=>foo1()}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
        </div>
    );
};

