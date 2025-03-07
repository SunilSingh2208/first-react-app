import {useState, useEffect} from 'react';

export const UseEffectComponent = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const makeApiCall = (name)=>{
        console.log("Make api call with this name ", name)
    }

    const handleUpdateName = (event)=>{
        const { value } = event.target;
        setName(value);

        //make api call is not receiving the update name state value
        //to overcome this issue we introduce useEffect hook
        // useEffect hook has dependencies array( cotaining state ) which ensure some action to be perform only
        // after that particular state change is completed
    }

    //use Effect will run initially once( always remember )
    //this will run everytime state will be update in this component
    // it has a side-effect that this will run for every state update( SINCE we can have multiple useState in our component)
    // we dont want it to run for every state update, we want to run for only a particular state update
    useEffect(()=>{
        console.log("This useEffect will run after every state update --> name:  ", name, " email: ", email);
        // console.log("value of name state is ", name);
        // makeApiCall();
    })

    //this will only when when name state will be updated, we have put name(state) in the dependency array
    useEffect(()=>{
        console.log("This useEffect should run only when name state will update, name: ", name);
        // makeApiCall(name);
    }, [name])

    const onLoadApiCall = ()=>{
        console.log("Make initial api call on page load");
    }


    //use Effect with empty dependency array, makes sure that some logic inside of this useEffect will run only once,
    // runs when the page loads
    // even if any state will update this will not run

    // this also have an optional return function that will run once the component will unmount from the DOM
    // or will be removed from the main DOM, for eg. user navigate to some screen, this component will not longer be visible
    // then before navigation this return will run

    useEffect(()=>{
        console.log("This should run only once, when the component will be loaded into the DOM");
        onLoadApiCall();

        // return function is (optional) 
        // you are connected with backend through socket( two way communication ) or anything that needs to be disconnected, 
        // since you are no longer in this screen
        // for eg chat apps
        // remove any memory leakage
        // for eg, user is on payment screen, and we don't have him to cancel the payment by mistake, so before leaving
        // we will prompt the user if he/she is aware that by doing this the payment will be cancelled
        return ()=>{
            console.log("Remove any subscription, or logging or api call")
        }

    }, [])



    return (
        <div>
            <h3>Hello from UseEffectComponent </h3>
            <br />
            <hr />

            <input
                type='text'
                value={name}
                onChange={handleUpdateName}
                placeholder='Enter name'
                style={{ background: "red" }}
            />
             <br />
             <br />
             <hr />
             <input
                type='text'
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                placeholder='Enter email'
                style={{ background: "red" }}
            />
        </div>
    )
}