import {useState} from "react";
import CreateToDo from "../CreateToDo/CreateToDo";
import ToDoItem from "../ToDoItem/ToDoItem";

interface ToDo {
    name: string;
    complete: boolean;
}


function ToDoList() {
    const [toDoItems, setToDoItems] = useState([
        {
            name: "dishes",
            complete: false
        },
        {
            name: "laundry",
            complete: false
        },
        {
            name: "grocery shopping",
            complete: true
        }
    ]);

    function handleComplete(todo: ToDo, index: number) {
        const updatedToDo: ToDo = {
            name: todo.name,
            complete: todo.complete
        };

        setToDoItems([
            ...toDoItems.slice(0, index),
            updatedToDo,
            ...toDoItems.slice(index+1)
        ]);
    }

    const handleCreate = (formData: any) => {
        let newToDoItem: ToDo = {
            name: formData.name,
            complete: false
        }

        setToDoItems([
            newToDoItem,
            ...toDoItems
        ])
    }

    return(
        <div className="ToDoList">
            <h1>ToDo List</h1>

            <CreateToDo onCreate={handleCreate} />

            <table>
                <tbody>
                    {toDoItems.map((toDoItem, index) => {
                    return <ToDoItem 
                                key={`${toDoItem.name}-${index}`} 
                                toDo={toDoItem}
                                onComplete={() => {handleComplete(toDoItem, index)}}    
                            />
                    })}
                </tbody>
            </table>

            
            
        </div>
    )

}




export default ToDoList;