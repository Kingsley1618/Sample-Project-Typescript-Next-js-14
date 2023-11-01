'use client'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { todoActions } from '@/redux/features/todoSlice';
import React, { ChangeEvent } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import styles from "./todo.module.css"
export default function TodoInput() {
  const [input, setInput] = useState<string>('');
  const [btnable, setBtnable] = useState(true);
  const dispatch = useDispatch();

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  const addtoTodo = () => {
    dispatch(
      todoActions.addTodo({
        title: input,
        id: Math.random() * 2,
        completed: false,
      })
    );

    setInput("")
  }

  useEffect(() => {
    if (!input || input.trim().length <= 1) {
      setBtnable(true);
    } else {
      setBtnable(false);
    }
  }, [input]);

  return (
    <div className={styles.parent}>
      <input
        type='text'
        value={input}
        placeholder='Add todo'
        onChange={changeHandler}
        className={styles.input}
       
      />

      <button type='button' className={styles.add} disabled={btnable} onClick={addtoTodo}>
        <IoAddOutline />
      </button>
    </div>
  );
}
