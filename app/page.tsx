"use client";
import { useState } from 'react';

export default function Home() {
  //hooks are function is react to manage a state(s)
  //used in place of variable to show update in DOM
  const [value, setCurrentValue] = useState(10);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasLight, setHasLight] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //tomorrow
  const [hobbies, setHobbies] = useState([]);
  const [profile, setProfile] = useState({
    age: null,
    height: null,
    color: null,
    name: "",
    email: "",
    password: "",
    hobbies: [],
    hasLight: true
  })


  // value = any variable(state) name that holds the value
  //setCurrentValue = any function name that updates the variable value, it is asynchoronous(side effect)
  // 5 is the initial value 
  // default undefined if 5 is not set or passed
  let a = 10;

  //useState can hold any kind of value(data type)
  // number, string, boolean, object, array, etc

  const update = () => {
    console.log("value of a: ", a);
    a++;
  }

  const updateState = () => {
    setCurrentValue(value + 1);
    console.log("Here is the updateState function, value of value variable is : ", value);
  }

  const updateName = (event) => {
    console.log("event -->", event.target.name, "------", event.target.value);
    setName(event.target.value);
    // setName(previous=>{
    //   return event.target.value;
    // });

  }

  const addHobby = () => {
    setHobbies((previous) => {
      if (inputValue !== "") {
        //spread operator
        return [...previous, inputValue]
      } else {
        return previous;
      }

    });


    // setHobbies([...hobbies, inputValue]);
    setInputValue("");
  }


  // console.log("Hobbies --", hobbies);

  let myarray = [2, 5, 6];

  //map returns a new array with modified value also
  //but it can't change the length of the new array
  let b = myarray.map(item=>{
    return item*2;
  })

  //filter method is used to filter out the values from the array
  //it return a new array that passes a certain condition
  //it can changes the length of the array(new array) 
  let c = myarray.filter(item=>{
    return item%2==0; // either true  or false
  })

  console.log("b --", b);
  console.log("a --", myarray);
  console.log("c --", c);



  const myhobby = ['cricket', 'football', 'soccer'];

  //filter the myhobby array
  //return only hobbies that are not cricket

  const newHobby = myhobby.filter(item=>{
    return item!= 'cricket';
  })

  console.log("original hobby: ", myhobby);
  console.log("new hobby: ", newHobby);



  return (
    <div>
      <div>Hello From Home Page: Sunil Negi</div>
      {/* <h3>Value of variable: {value}</h3>
      <button onClick={updateState}>Click</button> */}
      <h3>Your name is : {name} </h3>
      <h3>Sum of 2+2 is : {2 + 2}</h3>
      <h3>Bulb value is : {hasLight ? "yes" : "no"}</h3>

      <input
        type='text'
        value={name}
        name='username'
        onChange={updateName}
        style={{ background: "red" }}
      />
      <br />
      <br />
      <input
        type='text'
        value={email}
        name='email'
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        style={{ background: "red" }}
      />

      <br />
      <br />
      <br />
      <br />
      {/* Array type */}
      <input
        type='text'
        value={inputValue}
        name='hobby'
        placeholder='Enter hobby'
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        style={{ background: "red" }}
      />
      <br />
      <br />
      <button onClick={addHobby}>Add Hobby</button>
      <br />
      <br />

      <h3>Your hobbies are: </h3>
      {
        // hobbies.map((hobby, index)=>{
        //   return (<p key={index}>{index+1}: {hobby}</p>)
        // })

        hobbies.map((hobby, index) => (<p key={index}>
          {index + 1}: {hobby}
        </p>)
        )
      }

    </div>
  );
};
