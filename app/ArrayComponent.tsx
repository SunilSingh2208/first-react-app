import { useState } from 'react';

export const ArrayComponent = () => {
    const [hobbies, setHobbies] = useState([]);
    const [inputValue, setInputValue] = useState("");

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

    const handleDeleteHobby = (index) => {

        //best approach
        setHobbies(prev => {
            const newElements = prev.filter((_, i) => {
                return index != i;
            })

            return newElements;
        })

        //2nd approach
        // const newElements = hobbies.filter((_, i)=>{
        //   return index!=i;
        // })

        // setHobbies(newElements);
    }


    return (
        <div>
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

                hobbies.map((hobby, index) => (
                    <div key={index} className='d-flex flex flex-row mt-3'>
                        <p key={index}>
                            {index + 1}: {hobby}
                        </p> &nbsp;
                        <button className="ml-2 px-2 py-1 bg-blue-500 text-white" onClick={() => handleDeleteHobby(index)}>delete</button>
                        <br />
                        <hr />
                    </div>
                )
                )
            }
        </div>
    )
}