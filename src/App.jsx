import Task from "./components/Task.jsx";
import {useState} from "react";


function App() {

    let initial_tasks = [
        {title: "task number 1", checked: false},
        {title: "task number 2", checked: true},
        {title: "task number 3", checked: false}
    ]

    const [tasks, setTasks] = useState(initial_tasks)

    function add_new_task(ev) {
        let entered_txt = ev.target.value
        if (ev.key === "Enter" && entered_txt !== "" ) {
            setTasks([...tasks, {title: entered_txt, checked: false}] )
            ev.target.value = ""
        }
    }

    return (
        <>
            <div className="bg-gray-100">
                <div className="flex items-center justify-center h-screen">
                    <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                        <div className="flex items-center mb-6">
                            <h1 className="mx-auto text-4xl font-bold text-purple-600"> TO DO APP </h1>
                        </div>
                        <div className="relative">
                            <input type="text" placeholder="What needs to be done today?"
                                   className="w-full px-2 py-3 border rounded outline-none border-grey-600"
                                   onKeyPress={add_new_task}/>
                        </div>
                        <ul className="list-reset">
                            {/* eslint-disable-next-line react/jsx-key */}
                            {
                                tasks.map((obj, index) => <Task task_data={obj} key={index}/>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
