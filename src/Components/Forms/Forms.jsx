import React from 'react'
const Forms = () => {
    const [input, setInput] = React.useState({
        Title: "",
        Author: "",
        Description: "",
        Price: "",
        Book_Image: "",
        Random_Reviews: "",
    })


    
    const handleInput = (e)=>{
        const [value, name] = e.target
        const payload = {
            ...input, name: value
        }
        setInput(payload)
        console.log(payload)
    }
    return (
        <div>
            <input   onChange={handleInput} type="text" name="Title" id="" placeholder='Enter title' />
            <input   onChange={handleInput} type="text" name="Author" id="" placeholder='Enter Author' />
            <input   onChange={handleInput} type="text" name="Description" id="" placeholder='Enter Description' />
            <input   onChange={handleInput} type="text" name="Price" id="" placeholder='Enter Price' />
            <input   onChange={handleInput} type="text" name="ISBN " id="" placeholder='Enter ISBN' />
            <input   onChange={handleInput} type="text" name="Book_Image" id="" placeholder='Enter Book_Image' />
            <input   onChange={handleInput} type="text" name="Random_Reviews" id="" placeholder='Enter Random_Reviews' />
        </div>
    )
}
export default Forms
