import TaskItem from "./TaskItem.jsx";

function TaskList({visibleTasks, toggleTask, deleteTask, tasksLength}) {
    if (tasksLength === 0)
        return (
            <p className="task-list">No tasks yet</p>
        )
    if (visibleTasks.length === 0)
        return (
            <p className="task-list">No tasks selected</p>
        )

        return (
            <ul className="task-list">{visibleTasks.map(task =>
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask}/>)}</ul>
        )
}

export default TaskList;