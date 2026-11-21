function TaskItem({task, toggleTask, deleteTask}) {
    return (
        <li>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)}/>
            <span className={task.completed ? "task-item completed" : "task-item"}>{task.title}</span>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>X</button>
        </li>
    );
}

export default TaskItem;