import {useState} from "react";

function TaskForm({addTask}) {
    const [title, setTitle] = useState("");
    const [error, setError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) {
            setError(true);
            setTitle("");
            return;
        }
        addTask(title);
        setTitle("");
    }
    function handleChange(e) {
        setTitle(e.target.value);
        setError(false);
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input className="task-input" type="text" placeholder="Add new task" value={title}
                   onChange={handleChange} />
            <button className="task-button" type="submit">Add</button>
            {error && <p className="error">Please enter a task</p>}
        </form>
    );
}

export default TaskForm;
