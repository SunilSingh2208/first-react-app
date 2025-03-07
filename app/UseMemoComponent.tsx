import {useEffect, useState, useMemo } from 'react';

export const UseMemoComponent = ()=>{
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);

    // == check value
    // === check both value and data type

    useEffect(()=>{
        const length = name.length;
        console.log("Inside use effect")
        if(length > 0){
            if(length%2 === 0){
                const marks = 50 + Math.random()*10;
                setNumber(marks);
            }else{
                const marks = 50 - Math.random()*10;
                setNumber(marks);
            }
        }
    }, [name])


    //in real time, it memoized the dependency and the return value
    //if same value is returned it doesn't update the state in the DOM
    const userMarks = useMemo(()=>{
        const length = name.length;
        let marks = 0;
        if(length > 0){
            if(length%2 === 0){
                 marks = 50 + Math.random()*10;
            }else{
                 marks = 50 - Math.random()*10;
            }
        }

        return marks;
    }, [name.length])
    

    return (
        <div>
            <h3>UseMemoComponent</h3>
            <br /><br />
            <input value={name} onChange={e=>setName(e.target.value)} placeholder='Enter name' style={{backgroundColor:"GrayText"}} />
             <br />
             <h4>You will get {number} marks in exam </h4>
             <br />
             <h4>You memo value is {userMarks} </h4>
        </div>
    )
}