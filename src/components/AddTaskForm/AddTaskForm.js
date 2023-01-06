import React from "react";

const AddTaskForm = ({newTask,setNewTask,addTask}) =>{
    return(
        <>
            {/*ADD TASK*/}
            <div className="row">
                <div className="col">
                    <button
                        onClick={addTask}
                        className="btn btn-lg  add-btn">
                        ADD NEW STUDENT
                    </button>
                    <hr/>
                    <div className=" title">
                        <p>Name</p>
                        <p>Email</p>
                        <p>Phone</p>
                        <p>Enroll Number</p>
                        <p>Date of admission</p>
                    </div>
                    {/*<input*/}
                    {/*    value={newTask}*/}
                    {/*    onChange={ (e) => setNewTask(e.target.value) }*/}
                    {/*    className="form-control form-control-lg task"*/}
                    {/*/>*/}
                </div>
                <div className="col-auto">

                </div>
            </div>
            <br/>
        </>
    )
}

export default AddTaskForm