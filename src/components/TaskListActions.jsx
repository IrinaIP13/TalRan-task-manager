function TaskListActions({clearAllTasks, clearCompletedTasks}) {
    return (
        <div className="task-list-actions">
            <button className="clear-all-button" onClick={clearAllTasks}>Clear All</button>
            <button className="clear-completed-button" onClick={clearCompletedTasks}>Clear Completed</button>
        </div>
    )
}

export default TaskListActions;