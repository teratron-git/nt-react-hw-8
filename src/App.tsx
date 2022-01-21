import { useState } from "react"
import "./App.css"
import TaskSwitcher from "./components/TaskSwitcher"
import UseEffect from "./components/UseEffect"

const App = () => {
  const [task, setTask] = useState("1")

  const handler = (e: any) => {
    setTask(e.target.value)
  }

  return (
    <>
      <TaskSwitcher task={task} onChangeHandler={handler} />

      {task == "1" && <UseEffect />}

      {/* {task == "2" && <Steps />} */}

      {task == "3" && <>Task 3</>}
    </>
  )
}

export default App
