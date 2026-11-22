import './App.css'
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskStatistics from "./components/TaskStatistics.jsx";
import TaskFilter from "./components/TaskFilter.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskListActions from "./components/TaskListActions.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {initialTasks} from "./data/initialTasks.js";


function App() {
    const [tasks, setTasks] = useState(initialTasks)
    const [filter, setFilter] = useState("all")
    const { totalTasks, completedTasks } = calculateStatistics();

    function addTask(title) {
        const newTask = {
            id: crypto.randomUUID(),
            title: title.trim(),
            completed: false
        }
        setTasks(prev => [...prev, newTask])
    }

    function calculateStatistics() {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        return { totalTasks, completedTasks };
    }

    function  toggleTask(id) {
        setTasks(prev => prev.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task))
    }

    function deleteTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    function clearAllTasks() {
        setTasks([])
    }

    function clearCompletedTasks() {
        setTasks(prev => prev.filter(task => !task.completed))
    }

    function getVisibleTasks() {
        if (filter === "all") {
            return tasks;
        } else if (filter === "completed") {
            return tasks.filter(task => task.completed);
        } else if (filter === "incomplete") {
            return tasks.filter(task => !task.completed);
        }
    }
    const visibleTasks = getVisibleTasks();

    return (
        <>
            <Header/>
            <TaskForm addTask={addTask}/>
            <TaskStatistics completedTasks={completedTasks} totalTasks={totalTasks}/>
            <TaskFilter filter={filter} setFilter={setFilter}/>
            <TaskList visibleTasks={visibleTasks} toggleTask={toggleTask} deleteTask={deleteTask} tasksLength={tasks.length}/>
            <TaskListActions clearAllTasks={clearAllTasks} clearCompletedTasks={clearCompletedTasks}/>
            <Footer/>
        </>
    )
}

export default App
