import TodoForm from './components/TodoForm';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <TodoForm />
    </TodoContextProvider>
  );
}

export default App;
