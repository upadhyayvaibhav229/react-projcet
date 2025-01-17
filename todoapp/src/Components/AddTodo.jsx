import React, { useState } from 'react'
import { addTodo } from '../Features/TodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todo';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const TodoData = useSelector(((state=> state.todos)))
    const TodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(text))
        setText("")
    }

  return (
    <>
     
     <div className='w-full h-screen flex flex-col justify-center bg-slate-800 items-center'>
            <div>
                <form className='w-full text-white' onSubmit={TodoHandler}>
                    <div className='w-full'>
                        <h1 className='text-9xl text-yellow-500'>Just Do it.</h1>
                    </div>  
                    <div className='w-full mt-5 flex gap-x-1 bg-blue-500 rounded-lg'>
                        <input type='text' placeholder='ADD a task...' className='w-full px-2 py-2 rounded-lg bg-slate-600 text-white placeholder:text-2xl placeholder:px-2 text-2xl outline-none' value={text} onChange={(e)=> setText(e.target.value)}></input>
                        <button className='px-5 py-1 rounded-lg text-xl text-center text-' type='submit'>Add Todo</button>
                    </div>
                </form>
            </div>
        <Todos/>
        </div> 
    </>
  )
}

export default AddTodo
