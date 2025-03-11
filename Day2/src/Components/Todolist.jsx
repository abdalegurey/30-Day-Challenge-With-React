import React, { useReducer, useState,useEffect } from 'react'
import { initialState, reducer } from '../Reducer'

const Todolist = () => {




  const tasks = [
    { id: 3, text: "Buy milk" },
    { id: 1, text: "Do homework" },
    { id: 2, text: "Go to gym" }
  ];
  
  const sortedTasks = tasks.sort((a, b) => b.id - a.id);
  
  console.log(sortedTasks);
  



















  //const [state,dispatch]= useReducer(reducer,initialState)

  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editTest, setEditTask]= useState("");
  const [Edit, setEdit]= useState(false)
  const [sortOrder, setSortOrder] = useState('newest'); // Sorting state




  const HandleAdd = (e) => {
    e.preventDefault(); // Ka hortag reload-ka form-ka
  

      if (text.trim()) {
        const newTodo = {
          id: Date.now(),
          text,
          completed: false,
        };
        dispatch({ type: "add", payload: newTodo });
  
  
      
    
        setText(""); // Nadiifi input-ka
      }

  
  
  };

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  const HandleDelete=(id)=>{
    console.log(id)

    dispatch({
      type:"delete",
      payload:id
    })

  }

  const filtershape= state.map((todo)=>{
    // console.log("todooo",todo)
  })

  const [filtered,setFiltered]= useState("all")
  //console.log("filtered123", filtered)

 let filteredTodoCompleted= state.filter((todo)=> {
 if(filtered ==="complete"){
  return todo.completed
 }
 
 if(filtered === "incomplete"){
  return !todo.completed
 }

if(filtered === "all"){
  return state
}
 });

// console.log("filteredTodoCompleted",filteredTodoCompleted)
 

 const filderorder= [...filteredTodoCompleted].sort((c, d) => {
  //console.log("c",c);
  //console.log("d",d)

  if (sortOrder === 'newest') return d.id - c.id; // Newest first
    if (sortOrder === 'oldest') return c.id - d.id; // Oldest first

    if (sortOrder === 'completed-first') return d.completed - c.completed; // Completed first
    if (sortOrder === 'incomplete-first') return c.completed - d.completed; // Incomplete first
    if (sortOrder === 'a-z') return c.text.localeCompare(d.text); // Alphabetical A-Z
    if (sortOrder === 'z-a') return d.text.localeCompare(c.text); // Alphabetical Z-A

    return 0;



 })


 //console.log("sorterorder",sortOrder)


  const HandleCompleted=(id)=>{
   // console.log(id)
    //console.log("stateeee",state)

    dispatch({
      type:"toggle",
      payload:id
    })

  }
  //console.log(state)
  return (
<div className=' min-h-screen flex flex-col'>
<div className='max-w-4xl mx-auto flex-grow flex flex-col justify-center items-center mt-20'>

<div>
<div>
<h1 className='text-center text-3xl font-bold mb-7'>Todolist Application</h1>
</div>
<div className='flex sticky top-0 bg-white  py-2 z-10'>
 <form action="" onSubmit={HandleAdd} className='flex space-x-2 w-full'>
   <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className='w-full px-20 border-2 border-amber-700' />
   <button  className='bg-pink-600 rounded-lg text-white px-10 cursor-pointer'>{
    
   Edit ? "Edit" : "Add Task" 
    }</button>
 </form>
</div>


<div className=' w-full mx-w-lg'>
  <div className='flex gap-10  py-5'>
    <button  onClick={()=>setFiltered("all")} className='bg-pink-900 p-5'>All</button>
    <button onClick={()=>setFiltered("complete")} className=' bg-gray-700 p-5'>Completed</button>
    <button onClick={()=>setFiltered("incomplete")} className='bg-blue-700 p-5'>Incomplete</button>
    <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="completed-first">Completed First</option>
          <option value="incomplete-first">Incomplete First</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
  </div>

</div>



 <div className='shadow-lg mt-5 w-full max-w-lg max-h-96 overflow-y-auto '>
 <ul className='flex flex-col gap-3'>
  {
   filderorder.map((actions)=>(
      <li  className={`${actions.completed ? " bg-gray-700" : "bg-blue-700 text-white"} p-3 space-y-2 `}  >
      <div  key={actions.id}className='flex justify-between'>
        <div className='flex gap-2'>
          <input type="checkbox" className='cursor-pointer' onChange={()=>HandleCompleted(actions.id)} />
          <p style={{
            textDecoration: actions.completed ? "line-through" : "none"
          }}>{actions.text}</p>
        </div>
        <div>
          <button className='text-white cursor-pointer' onClick={()=>HandleDelete(actions.id)}>Delete</button>
        </div>
      </div>
 
    </li>
    ))
  }

   
   

  

   
 </ul>

</div>
</div>


  


 
</div>
    </div>
  )
}

export default Todolist
