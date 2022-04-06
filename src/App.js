import { useState } from 'react';
import Form from './components/Form/Form';
import shortid from 'shortid';
import TodoList from './components/TodoList/TodoList';
import TodoEditor from './components/TodoEditor/TodoEditor';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';
import initialTodos from './todos.json';

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('');

  const addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    setTodos(todos => [todo, ...todos]);
  };

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  const toggleCompleted = todoId => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  const calculateCompletedTodos = () => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  const totalTodoCount = todos.length;
  const completedTodoCount = calculateCompletedTodos();
  const visibleTodos = getVisibleTodos();

  return (
    <Container>
      <Form onSubmitChange={formSubmitHandler} />
      <div>
        <p>Всего заметок: {totalTodoCount}</p>
        <p>Выполнено: {completedTodoCount}</p>
      </div>

      <TodoEditor onSubmit={addTodo} />

      <Filter value={filter} onChange={changeFilter} />

      <TodoList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </Container>
  );
}

export default App;

//class

/* import React, { Component } from 'react';
import Form from './components/Form/Form';
import shortid from 'shortid';
import TodoList from './components/TodoList/TodoList';
import TodoEditor from './components/TodoEditor/TodoEditor';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Form onSubmitChange={this.formSubmitHandler} />
        <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;

 */
