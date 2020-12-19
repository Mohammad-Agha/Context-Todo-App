import './App.css';
import Nav from './Nav';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext'
import AddTodo from './AddTodo';
function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Nav />
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
