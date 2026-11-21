function TaskStatistics({completedTasks, totalTasks}) {
    return (
        <div className="task-statistics">
            <p>Total tasks: {totalTasks}</p>
            <p>Completed tasks: {completedTasks}</p>
        </div>
    );
}

export default TaskStatistics;