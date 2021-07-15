import {useState} from "react";
import "./ToDoItem.css";


interface ToDo {
    name: string;
    complete: boolean;
}

interface Props {
    toDo: ToDo,
    onComplete: (todo: ToDo) => void
}

function ToDoItem({toDo, onComplete}: Props) {
    const [thisToDo, setThisToDo] = useState(toDo);

    function handleToDoChange(): void {
        setThisToDo({
            name: thisToDo.name,
            complete: !thisToDo.complete
        });

        onComplete({
            name: thisToDo.name,
            complete: !thisToDo.complete
        })
        
    }

    return (
        <tr className="ToDoItem">
            <td className={thisToDo.complete ? "completed" : ""}>
                {thisToDo.name}
            </td>
            <td>
                <label htmlFor="complete">Completed</label>
                <input type="checkbox" name="complete" value="true" id="complete" checked={thisToDo.complete} onChange={handleToDoChange}/>
            </td>
        </tr>
    )
}

export default ToDoItem;