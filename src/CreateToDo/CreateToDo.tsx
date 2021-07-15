import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    onCreate: (formData: any) => void
}

function CreateToDo({onCreate}: Props) {
    const [formData, setFormData] = useState({
        name: "",

    })

    function handleChangeName(e: ChangeEvent<HTMLInputElement>){
        setFormData({
            name: e.target.value
        });
    }


    function handleSubmit(e: FormEvent){
        e.preventDefault();

        // send data to parent
        onCreate(formData);
        
        // clear form input field
        setFormData({
            name: ""
        })

    }

    


    return(
        <div className="CreateToDo">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New ToDo:</label>
            <input type="text" name="name" id="name" onChange={handleChangeName} value={formData.name}/>
            <button type="submit">Add ToDo Item</button>
        </form>
        <p>Name: {formData.name}</p>
    </div>
    )
    




};


export default CreateToDo;