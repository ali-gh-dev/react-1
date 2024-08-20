// eslint-disable-next-line react/prop-types
import {useState} from "react";

// eslint-disable-next-line react/prop-types
function Task({task_data, checkbox_func, delete_func, edit_func}) {

    const [editMode, setEditMode] = useState(false)

    function edit_task_title(event) {
        if (event.key === "Enter") {
            // console.log(event.target.value)
            edit_func(task_data, event.target.value)
            setEditMode(false)
        }
    }

    return (
        <>
            <li className="relative flex items-center justify-between px-2 py-6 border-b">
                <div>
                    
                    {
                        // eslint-disable-next-line react/prop-types
                        editMode
                            ?
                            <div className="flex items-center">
                                {/* eslint-disable-next-line react/prop-types */}
                                <input type="text" defaultValue={task_data?.title}
                                       className="w-full px-4 py-2 border border-gray-300 rounded"
                                       onChange={() => {
                                       }}
                                       onKeyDown={edit_task_title}
                                />
                                <button type="button" className="absolute right-0 flex items-center space-x-1">

                                    <svg onClick={() => setEditMode(false)} xmlns="http://www.w3.org/2000/svg"
                                         className="w-5 h-5 text-red-700"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            :
                            // eslint-disable-next-line react/jsx-no-comment-textnodes
                            <div className="flex items-center">
                                {/* eslint-disable-next-line react/prop-types */}
                                <input type="checkbox" checked={task_data?.checked}
                                       onChange={() => checkbox_func(task_data)}
                                />

                                {/* eslint-disable-next-line react/prop-types */}
                                <p className={`inline-block mt-1 ml-2 text-gray-600 ${task_data?.checked ? "line-through" : ""}`}>
                                    {/* eslint-disable-next-line react/prop-types */}
                                    {task_data?.title}
                                </p>

                                <button type="button" className="absolute right-0 flex items-center space-x-1">
                                    <svg onClick={() => setEditMode(true)} xmlns="http://www.w3.org/2000/svg"
                                         className="w-5 h-5 text-blue-600"
                                         fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                    </svg>
                                    <svg onClick={() => delete_func(task_data)} xmlns="http://www.w3.org/2000/svg"
                                         className="w-5 h-5 text-red-700"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                    }

                </div>


            </li>
        </>
    )
}

export default Task
