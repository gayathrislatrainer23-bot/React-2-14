
import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import LogInForm from './components/LogInForm';
import Show from './components/Show';
import ShowMessage from './components/ShowMessage';
import StudentsList from './components/StudentsList';

function App() {
const userName = "Manu"

  return (
    <div className="App">
    {/* <h1>{userName}</h1>   */}
   {/* <Greetings  userName = {userName}/> */}
   <Counter/>
   <ShowMessage/>
<LogInForm/>
<StudentsList/>
<Show/>
   </div>
  );
}

export default App;
