import logo from './logo.svg';
import './App.css';

function App() {
  const hitBackend = () => {
    fetch('/')
    .then((response) => {
      console.log(response.data);
    });
  }
  return (
    <div className="App">
      <button onClick={hitBackend}>Send request</button>
    </div>
  );
}

export default App;
