
import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import LogInForm from './components/LogInForm';
import ShowMessage from './components/ShowMessage';

function App() {
const userName = "Manu"

  return (
    <div className="App">
    {/* <h1>{userName}</h1>   */}
   {/* <Greetings  userName = {userName}/> */}
   <Counter/>
   <ShowMessage/>
<LogInForm/>
   </div>
  );
}

export default App;
