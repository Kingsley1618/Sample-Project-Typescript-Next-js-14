'use client'
import { createSlice, configureStore } from "@reduxjs/toolkit";
export interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
  }
  
  const initialState = {
    todo: [] as TodoItem[],
    
  };
  

  const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
      addTodo(state, action) {
        state.todo.sort((a, b) => {
          let fa = a.title.toLowerCase();
          let fb = b.title.toLowerCase();
          if (fa < fb) {
            return -1;
          } else if (fb < fa) {
            return 1;
          }
          return 0;
        });
        const newTodo = {
          title: action.payload.title,
          id: action.payload.id,
          completed: action.payload.completed
        };
        state.todo = [...state.todo, newTodo];
      },
      deleteTodo(state, action) {
        state.todo = state.todo.filter((val) => val.id !== action.payload.id);
      },
      completeToggle(state, action) {
        const finding = state.todo.find((val) => val.id === action.payload.id);
        if (finding) {
          finding.completed = !action.payload.completed;
        }

     if(finding?.completed === true) {
      
     }
      }
    }
  });

  export default todoSlice.reducer
  export const todoActions = todoSlice.actions