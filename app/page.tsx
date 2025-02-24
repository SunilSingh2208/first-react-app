"use client";
import {useState} from 'react';

export default function Home() {
  //hooks are function is react to manage a state(s)
  //used in place of variable to show update in DOM
  const [value, setCurrentValue] = useState(0);
  // value = any variable(state) name that holds the value
  //setCurrentValue = any function name that updates the variable value, it is asynchoronous(side effect)
  // 5 is the initial value 
  // default null if 5 is not set or passed
  let a = 5;


  const update=()=>{
    console.log("Here is the update function, value of a is : ", a);
    a++;
  }


  const updateState = ()=>{
    setCurrentValue(value+1);
    console.log("Here is the updateState function, value of value variable is : ", value);
  }

  return (
    <div>
      <div>Hello From Home Page: Sunil Negi</div>
      <h3>Value of variable: {value}</h3>
      <button onClick={updateState}>Click</button>
    </div>
  );
};
