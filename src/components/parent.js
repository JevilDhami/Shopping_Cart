 import React from "react"
import Child from "./child";

 export const Parent = ({onIncrease, onDecrease, count})  => {
    return(
        <div>
            <button onClick={()=>onIncrease("this is Increase Function")}>Plus</button>
            <button onClick={()=>onDecrease("this is Decrease Function")}>Minus</button>
            <Child data={count} /> 
        </div>
    )

}

export default Parent;