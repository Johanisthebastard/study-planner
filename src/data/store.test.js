import { describe, it, expect } from 'vitest';
import { useStore } from './store';  
describe('useStore', () => {

  it('should toggle todo done status', () => {
    const { toggleTodo, todos } = useStore.getState();
    const todoId = todos[0].id;
    const initialStatus = todos[0].done;

    toggleTodo(todoId);
    const updatedStatus = useStore.getState().todos[0].done;
    expect(updatedStatus).toBe(!initialStatus);

    
    toggleTodo(todoId);
  });

  it('should set todayName', () => {
    const { setTodayName } = useStore.getState();
    const newTodayName = 'Monday';

    setTodayName(newTodayName);
    expect(useStore.getState().todayName).toBe(newTodayName);
  });

  it('should set todos', () => {
    const { setTodos } = useStore.getState();
    const newTodos = [
      { id: 1, text: 'Test Todo 1', done: false },
      { id: 2, text: 'Test Todo 2', done: true },
    ];

    setTodos(newTodos);
    expect(useStore.getState().todos).toEqual(newTodos);
  });

  it('should delete todo', () => {
    const { deleteTodo, setTodos } = useStore.getState();
    const initialTodos = [
      { id: 1, text: 'Test Todo 1', done: false },
      { id: 2, text: 'Test Todo 2', done: true },
    ];

    setTodos(initialTodos);
    deleteTodo(1);
    const updatedTodos = useStore.getState().todos;

    expect(updatedTodos).toEqual([{ id: 2, text: 'Test Todo 2', done: true }]);
  });

  it('should reset todos', () => {
    const { resetTodos, setTodos } = useStore.getState();
    const newTodos = [
      { id: 1, text: 'Test Todo 1', done: false },
      { id: 2, text: 'Test Todo 2', done: true },
    ];

    setTodos(newTodos);
    resetTodos();
    expect(useStore.getState().todos).toEqual([]);
  });

});