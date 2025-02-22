import React,{useState} from 'react'

const App = () => {

  const [tasks, settasks] = useState([]);
  const [task, settask] = useState("");
  
  const addTask=()=>{
    if(task.trim()==="") return;
    settasks([...tasks,task]);
    settask("")
  }

  const deleteTask=(index)=>{
    const newTasks=tasks.filter((elem,idx)=> idx !== index);
    settasks(newTasks);

  }


  return (
    <div className='h-screen w-full flex items-center  justify-center'>
      <div className='bg-red-100 rounded-md p-4'>
        <div className='flex items-center justify-between gap-5'>
          <input value={task} onInput={(e)=>settask(e.target.value)} className='bg-neutral-300 rounded-md px-3 py-2 outline-none ' type="text"  placeholder='Enter the task name'/>
          <button onClick={addTask} className='px-2 py-1 bg-neutral-400 rounded-md text-white'> Add Task</button>
        </div>
        
        {tasks.map((elem,idx)=>(
          <div key={idx} className='flex gap-5 items-center justify-between mt-4'>
          <p className='px-2'> {elem} </p>
          <button onClick={()=>deleteTask(idx)} className='px-4 py-1 bg-red-500 rounded-md text-white'>Delete</button>
          
        </div>
        ))}

      </div>
      
    </div>
  )
}

export default App
