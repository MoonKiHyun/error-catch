import logo from './logo.svg';
import './App.css';
import User from './User';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const user = {
    id: 1,
    username: 'ansrlgus'
  }
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
