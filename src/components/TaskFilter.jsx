function TaskFilter({filter, setFilter}) {

    return (
        <select className="form-select" value={filter}
                onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>
    )
}

export default TaskFilter;