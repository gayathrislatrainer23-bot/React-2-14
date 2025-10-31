
import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import ShowMessage from './components/ShowMessage';

function App() {
const userName = "Manu"

  return (
    <div className="App">
    {/* <h1>{userName}</h1>   */}
   {/* <Greetings  userName = {userName}/> */}
   <Counter/>
   <ShowMessage/>
    </div>
  );
}

export default App;
