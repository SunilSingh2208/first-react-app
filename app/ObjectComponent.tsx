import { useState } from 'react';

export const ObjectComponent = () => {

    // const obj = {
    //     name: "Sandeep",
    //     age: 3, 
    //     gender: "male"
    // };
    // obj.name
    // obj["name"]
    // delete obj.age;

    //object destructure
    // const {name} = obj;

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
        console.log("value: ", value, " name: ", name);
        setProfile((prev)=>{
            return {
                ...prev, 
                [name]:value
            }
        })
    }

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