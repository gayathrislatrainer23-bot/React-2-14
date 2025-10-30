
import './App.css';
import Greetings from './components/Greetings';

function App() {
const userName = "Manu"

  return (
    <div className="App">
    {/* <h1>{userName}</h1>   */}
   <Greetings  userName = {userName}/>
    </div>
  );
}

export default App;
