import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Greeting name="John" />
      <Greeting name="Mary" />
      <Greeting name="Alex" />
      <Greeting name="Sarah" />
 </div>
    </div>
  )
}

export default App;
