import todoObject from '../src/todo';

describe('toDoObject', () => {
  it('Creates a ToDo Object', () => {
    const newToDo = todoObject('Anonymous', 'I am there', '2222-2-2', 'High');
    expect(newToDo.title).toBe('Anonymous');
  });
});