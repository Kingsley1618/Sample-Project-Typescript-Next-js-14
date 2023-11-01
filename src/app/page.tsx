import Image from 'next/image'
import TodoInput from "@/Todo/todoInput"
import TodoList from "@/Todo/todoList"
export default function Home() {
  return (
   <div className='max-w-[800px] mx-auto block w-[100%]'>
   <h1 className='text-center font-black text-[2rem]'>TODOLIST</h1>
   <TodoInput />
   <TodoList />
   </div>
  )
}
