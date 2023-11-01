'use client'
import React, { useRef } from 'react';
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import styles from "./todo.module.css"
import { todoActions } from '@/redux/features/todoSlice';
import RootState from '@/redux/features/rootState';
interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}
export default function TodoList() {

  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo);
  



  return (
    <>
        <hr />
      <ul className={styles.main}>
        {todo.map((list: TodoItem) => {
          return (
            <>
            <li 
            className={styles.item}
              style={{
                textDecoration: list.completed ? 'line-through' : 'none',
              }}
              key={list.id}
            >
             <div className={styles.left}> 
                <input
                  onClick={() => {
                    dispatch(
                      todoActions.completeToggle({
                        id: list.id,
                        completed: list.completed,
                      })
                    );
                  }}
                  type="checkbox"
                 
               
                  checked={list.completed}
               />
             
          <h1 className={styles.text}>   {list.title}</h1> 
              </div> 



              <div>
              <button
                type="button"
                className="btn delete"
                onClick={() => {
                  dispatch(todoActions.deleteTodo({ id: list.id }));
                }}
              >

                <AiOutlineClose />
              </button>
             </div>
           
            </li>

          
        
          </>
          );
        })}

       
      </ul>
    </>
  );
}
