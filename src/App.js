import React, {useState} from 'react'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import Todo from './components/toDo/ToDo'
import UpdateForm from './components/UpdateForm/UpdateForm'
import './App.css';

function App(){
    // Task State
    const [toDo, setToDo] = useState([
        {'id': 1, 'Ali': 'kuti@gmail.com', '0777 77 77 77': true},
        {'id': 2, 'Nur': 'student@gmail,com', '0888 88 88 88': true},
        {'id': 2, 'GUJ': 'student@gmail,com', '0567 88 88 88': true}
    ])
    // Temp State
    const [newTask, setNewTask] = useState('')
    const [updateData, setUpdateData] = useState('')
    // Add task
    const addTask = () => {
        if(newTask){
            let num = toDo.length + 1
            let newEntry = { id: num, name: newTask, status: false }
            setToDo([...toDo, newEntry])
            setNewTask('')
        }
    }
    // delete Task
    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !==id)
        setToDo(newTasks)
    }
    // mark task as done or completed
    const markDone = (id) => {
        let newTask = toDo.map(task => {
            if (task.id === id){
                return({...task, status: !task.status})
            }
            return task
        })
        setToDo(newTask)
    }
    // cancel update
    const cancelUpdate = () => {
        setUpdateData('')
    }
    // change task for update
    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            name: e.target.value,
            status: updateData.status ? true : false
        }
        setUpdateData(newEntry)
    }
    // update task
    const updateTask = () => {
        let filterRecords = [...toDo].filter( task => task.id !== updateData.id )
        let updatedObject = [...filterRecords, updateData]
        setToDo(updatedObject)
        setUpdateData('')
    }
    return (
        <div className="container App">
            {/*update task*/}
            { updateData && updateData ? (
                <UpdateForm
                    updateData={updateData}
                    changeTask={changeTask}
                    updateTask={updateTask}
                    cancelUpdate={cancelUpdate}
                />
            ) : (
                <AddTaskForm
                    newTask={newTask}
                    setNewTask={setNewTask}
                    addTask={addTask}
                />
            ) }
            {/* Display ToDos*/}
            {toDo && toDo.length ? '' : 'No Tasks...'}
            <Todo
                toDo={toDo}
                markDone={markDone}
                setUpdateData={setUpdateData}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;