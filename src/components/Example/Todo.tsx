import displayErrorMessage from '@/utils/displayErrorMessage';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import classNames from 'classnames';
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

interface ITodo {
  id: number;
  name: string;
  completed?: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<ITodo>();

  const handleCreateTodos = (todo: ITodo) => {
    if (todos.includes(todo)) {
      displayErrorMessage('Todo already exists');
    } else {
      setTodos((prev) => [...prev, todo]);
      setTodo({
        name: '',
        completed: false,
        id: 0,
      });
    }
  };

  const handleDeleteTodo = (todoId: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const handleUpdateTodo = (todoId: number, completed: boolean) => {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[todoIndex] = {
        ...updatedTodos[todoIndex],
        completed: completed,
      };
      setTodos(updatedTodos);
    }
  };

  const completedTodo = todos.filter((todo) => todo.completed);

  return (
    <div className="space-y-3">
      <div className="text-base font-semibold">What are you doing today?</div>
      <TextField
        label="What should be done?"
        className="w-full"
        value={todo?.name}
        onChange={(e) => {
          setTodo({
            completed: false,
            name: e.target.value,
            id: todos.length + 1,
          });
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            handleCreateTodos(todo!);
          }
        }}
      />

      <div className="flex justify-between">
        <span>
          Completed:{' '}
          <span className="font-semibold">{completedTodo.length}</span>
        </span>
        <span>
          Total: <span className="font-semibold">{todos.length}</span>
        </span>
      </div>

      {todos.map((todo) => (
        <div className="flex items-center justify-between" key={todo.id}>
          <FormControlLabel
            control={
              <Checkbox
                checked={todo.completed}
                onChange={(e) => {
                  handleUpdateTodo(todo.id, !todo.completed);
                }}
              />
            }
            label={
              <p className={classNames({ 'line-through': todo.completed })}>
                {todo.name}
              </p>
            }
          />

          <MdDelete
            className="text-red-600 text-2xl cursor-pointer"
            onClick={() => handleDeleteTodo(todo.id!)}
          />
        </div>
      ))}
    </div>
  );
};

export default Todo;
