import { type Todo as TodoType } from '../types';
import { Todo } from './Todo'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  todos: TodoType[]
  setCompletedTodo: (id: string, completed: boolean) => void
  setTitle: (params: Omit<TodoType, 'completed'>) => void
  removeTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, removeTodo, setCompletedTodo, setTitle }) => {
  const [isEditing, setIsEditing] = useState('')
  const [parent] = useAutoAnimate()
  
  return (
    <ul className='todo-list' ref={parent}>
      {todos?.map((todo) => (
        <li 
          key={todo.id}
          onDoubleClick={() => setIsEditing(todo.id)}
          className={`
            ${todo.completed ? 'completed' : ''}
            ${isEditing === todo.id ? 'editing' : ''}
          `}
        >
          <Todo 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            setCompleted={setCompletedTodo}
            removeTodo={removeTodo}
            setTitle={setTitle}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  );

}
