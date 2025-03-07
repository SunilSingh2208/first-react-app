import { useState } from 'react';

export const ObjectComponent = () => {

    // const obj = {
    //     name: "Sandeep",
    //     age: 3, 
    //     gender: "male"
    // };
    // obj.name
    // obj["name"]
    // obj.gender = "male" // update value of gender key in the obj if exists, else add gender key
    // obj.gender = "female" // update value of gender key in the obj if exists, else add gender key
    // delete obj.age;

    //object can't have duplicate keys, it will update the object value if same key will be passed


    //object destructure( extract value from an obj )
    // const {name, age} = obj;

    const [profile, setProfile] = useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        password: ""
    })

    //use square brackets for dynamic key in object []
    const updateProfile = (event) => {
        const { value, name } = event.target;

        // const name = event.target.name;
        // const value = event.target.value;

        // [name] --> here [] sets the variable value as key not direct name as key

        console.log("value: ", value, " name: ", name);
        setProfile((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    // let a = {};
    // a;
    // {}
    // a.name = "test";
    // a;
    // {name: 'test'}
    // a.name = "aa"
    // a;
    // {name: 'aa'}
    // a.gender = "m"
    // a
    // {name: 'aa', gender: 'm'}
    // a.gender = "f"
    // a;
    // {name: 'aa', gender: 'f'}
    // a["key"] = "test"
    // a;
    // {name: 'aa', gender: 'f', key: 'test'}
    // a[key] = "ok"   //here key is dynamic that will be set in this object



    return (
        <div>
            <br />
            <hr />
            <hr />
            <h4>This is Object component</h4>
            <br />
            <input
                type='text'
                value={profile.name}
                name='name'
                onChange={updateProfile}

                style={{ background: "red" }}
            />
            <br />
            <br />
            <input
                type='text'
                value={profile.age}
                name='age'
                onChange={updateProfile}

                style={{ background: "red" }}

            />
            <br />
            <br />
            <input
                type='text'
                value={profile.gender}
                name='gender'
                onChange={updateProfile}

                style={{ background: "red" }}

            />
            <br />
            <br />
            <input
                type='text'
                value={profile.email}
                name='email'
                onChange={updateProfile}

                style={{ background: "red" }}

            />
            <br />
            <br />
            <input
                type='text'
                value={profile.password}
                name='password'
                onChange={updateProfile}

                style={{ background: "red" }}

            />
            <hr />
            <hr />
        </div>
    )
}