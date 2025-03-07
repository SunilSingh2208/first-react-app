import { useRef, useState } from 'react';

export const UseRefComponent = ()=>{
    const [name, setName] = useState("");
    const emailRef = useRef(null);

    //useRef hook
    //refer to a html tag, kept it values 
    //don't need to update the state, ref has the control of the html tag

    //email ref is an object that has current as key which holds whole input tag properties

    console.log("email ref: ", emailRef.current);

    // let a = {name: "test"};

    //when do have nested objects, and values can be undefined(optional), you will use conditional operator
    //so that the app doesn't break with undefined error or null error;

    // console.log("Your age is ", a?.gender?.name?.type?.work); 
    
    //here on submit we can see that we can control the input tag fully
    //useref can store the value of the input, as well as has the full control of the input
    //not make unnecessary state update in the DOM

    //we can add useRef to any tag --> input, h tag, a tag, button tag, etc.

    const submitForm = ()=>{
        console.log("Your name is ", name);
        console.log("your email is ", emailRef.current.value);
        emailRef.current.placeholder = "Hello now";
        emailRef.current.value = "";
        emailRef.current.style = "background-color:blue;"
    }

    return (
        <div>
            <h3>UseRefComponent</h3>
            <br /><br />
            <input placeholder='Enter name' value={name} onChange={e=>setName(e.target.value)} style={{backgroundColor:"GrayText"}} />
             <br />
             <h3>Your name is {name}</h3>
             <br /><br />
             <input placeholder='Enter email' ref={emailRef} style={{backgroundColor:"GrayText"}} />

             <br />
             <br />
             <button onClick={submitForm} >Click Here</button>
        </div>
    )
}