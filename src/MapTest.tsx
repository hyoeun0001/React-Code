import React,{} from "react";

const MapTest = ()=>{
    const fruits = ['apple', 'banana', 'oragne'];

    return(
        <div>
            <h1>과일</h1>
            <ul>
                {
                    fruits.map((fruit, index)=>(
                         <li key={index}>{fruit}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MapTest;