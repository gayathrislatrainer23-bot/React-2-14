
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import FruitList from './components/FruitList';
import Greetings from './components/Greetings';
import LogInForm from './components/LogInForm';
import Show from './components/Show';
import ShowMessage from './components/ShowMessage';
import SideEffect from './components/SideEffect';
import StudentsList from './components/StudentsList';
import StudentTable from './components/StudentTable';
import Vegetable from './components/Vegetable';
import {BrowserRouter,Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';

function App() {
const userName = ["Manu"]

  return (
    <div className="App">
    {/* <h1>{userName}</h1>   */}
   {/* <Greetings  userName = {userName}/> */}
   {/* <Counter/>
   <ShowMessage/>
<LogInForm/>
<StudentsList/>
<Show/> 
<FruitList/>
*/}
{/* <Vegetable/>  */}
{/* <StudentTable/>
<Form/> */}
{/* <SideEffect/> */}
<BrowserRouter>
<nav>
  <Link to={"/home"}>Home</Link>
  <Link to={"/about"}>About</Link>
</nav>
<Routes>
  <Route path='/home' element ={<Home/>} />
  <Route path='/about' element ={<About/>} />
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
