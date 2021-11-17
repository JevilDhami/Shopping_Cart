import React, { useState } from "react";
// import Child from "../child";
import Parent from "../parent";

const Counter = () => {
const [counter, setCounter] = useState(0)

const Click1 = (value) => {
    console.log('value :>> ', value);
	setCounter(counter + 1)
}
const Click2 = () => {
	setCounter(counter - 1)
}

return (
	<div>
	Counter App
        {/* <div >
        <Child data = {counter} Click1={Click1} />
        </div> */}

        <div>
        <Parent count={counter} onIncrease={Click1} onDecrease={Click2} />
            
        </div>
	</div>
)
}

export default Counter;