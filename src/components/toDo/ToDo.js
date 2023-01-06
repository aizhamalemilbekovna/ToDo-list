import React from "react";
import {AiOutlineDelete} from "react-icons/ai";
import {BsPencil} from "react-icons/bs";
import user from '../../img/msg1799107661-13950.jpg'
import '../../App.css'

const ToDo = ({toDo, markDone, setUpdateData,deleteTask}) =>{
    return(
        <>
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1: -1)
                .map( (task, index) => {
                    return(
                        <React.Fragment key={task.id}>
                            <div className="col taskBg">
                                <div className={task.status ? 'done' : ''}>
                                    {/*<span className='taskNumber'>{index + 1}</span>*/}
                                    <span className='userImg'> <img src={user} alt=""/> </span>
                                    <span className='taskText'>{task.title}</span>
                                </div>
                                <div className="iconsWrap">
                                <span title="Completed / Not Completed"
                                      onClick={ (e) => markDone(task.id) }>

                                </span>

                                    {task.status ? null : (
                                        <span title="Edit"
                                              onClick={ () => setUpdateData({
                                                  id: task.id,
                                                  title:task.title,
                                                  status: task.status ? true : false
                                              })}>
                                    <BsPencil/>
                                </span>
                                    )}



                                    <span title='Delete'
                                          onClick={() => deleteTask(task.id)}>
                                    <AiOutlineDelete/>
                                </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default ToDo