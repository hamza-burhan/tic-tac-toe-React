import React, { useState } from 'react'

export default function HighOrder(Component) {
    

    function UpdateComponent(){
        const [counter,setCounter] = useState(0)
        const handleCounter = ( ) => {
            setCounter(counter + 1)
        }
        return <Component counter={counter} handleCounter={handleCounter}/>
    }

    console.log("component",UpdateComponent)
    return UpdateComponent
    
}
