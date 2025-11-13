day-1
29/10/2025
1. Bom
   dom
2. React
3. Library
4. Npm
5. node -- js runtime environments
6. node installation
7. create react app 
8. Babel -- compailer/ transpailer -convert jsx to pure js


   day-2

30/10/2025
 work flow and folder structure of react
project/

node-module -- store dependencies
index.html -- entry html file -- Single page
src-- dynamic folder -- changes occurs
index.js -- app entry point
App.jsx -- main react component -- parsel casing
package.json -- keep meta data of dependencies

components  -> building block 
1. class comp
2. functional com : js fun that returns jsx element
                     parcelcasing

function Apple () {
return (
jsx
)
}


jsx : js xml
      it is html like syntax

jsx rules
 
1. only one parent element can return
2. class - className
3. js emmaded using {}
4. inline styles :  use {{}}
5. events : onclick -- html event
            onClick -- react event (synthetic events)

props :  data PASSING FROM PARENT TO CHILD


object destructuring
const student = {
  name: "Gayathri",
  age: 22,
  course: "MERN",
  city: "Chennai"
};

// Split (extract) some properties
const { name, age } = student;

console.log(name); // Gayathri
console.log(age);  // 22
             

day-3

31/10/2025

State : special memory inside comp that hold data which can change over time
hooks: special fun:s used to state management ,life cycle metnods and  side effect
useState : hook used to manage state.
const [state, setState] = useState(0)
events:action performed by user
synthetic events : react wrap html events.

task: 1
1. increment not leads to 10 and decrement not leads to less than 0
2. reset btn

day-4

3/10/2025

task : 2
Show each student’s name (from props) with a Present/Absent button.
Use state to toggle and display the attendance status.


day-5
31/10/2025
fragments: not create a new node in dom.
listing in react  by map and key
ternary opertor , boolean in state 
tasks
1. counter => reset()
2. login button ,and islogin only show  homepage 
      && and state
<!-- 3. hide and show button 
hide btn show btn-- show some message
hide the messsage -->

class task: 1. list some list of fruits in array(for of loop)
            2. list of vagitable and price  object (keys and values)


task:3
3.Show and Hide Button
a. Create a component with content that can be toggled visible or hidden.
b. Use a button to show or hide the content dynamically.

day-6
3/11/2025
state


day-7
4/11/2025
listing and key

day-8
5/11/2025
listing and key object

day-9
6/11/2025

props task:

1: Weather Info with Object Prop

     Create a component that accepts a single object as a prop
          (example: { city: "Chennai", temp: 30 }) and displays:
     output:
              Current temperature in Chennai is 30°C

            WeatherInfo - parent comp
            WeatherDisplay - child comp

            props
            Weather ={ city: "Chennai", temp: 30 }
{weather}
            weather.city
            weather.temp

            template literal:
            <p>{`nbhksdg ${}`}</p>

 2: User Login Status with Conditional Prop

        Pass a user object as a prop 
         (example: { name: "Manu", isLoggedIn: true }).

     output:

"Welcome back!" if isLoggedIn is true, otherwise show "Please login".

Login : parent
LoginStatus : child
{ name: "Manu", isLoggedIn: true } : props
isLoggedIn ? "Welcome back!" : "Please login"

3.Colors with Array Prop
      Pass an array of colors as a prop (example: ["Red", "Blue", "Yellow"]).
      Display them in one line like:
      output:
            Primary colors are: Red, Blue, Yellow

  ColorsInfo - parent comp
  ColorsDisplay - child comp
colors = ["Red", "Blue", "Yellow"]

task :
ternary opertor  login and $$ operator
1. weather app ==> temp : 30 hot else cold
 <!-- 1. need input filed  -->
 <!-- 2. temp enter (0-55) --> not needed
 3. temp bellow 30 cold + image  --> else hot  && 


day-9
6/11/2025


Learn on monday
1. select(drop down)
2. form (onsubmit)
3. js test

class Task  list the bellow

const student = {
  name: "Rahul",
  age: 17,
  grade: "A",
  hobbies: ["Reading", "Cycling", "Drawing"]
};

student?.hobbies.map((hobby)=>(

))

day-10
10/11/2025

controlled com : comp controlled by react state;
uncontrolled com : comp controlled by dom itself;

TASK:
2. Form Task
 Create a Student Registration Form with the following inputs:
Name (text input)


Age (number input)


Email (email input)


Password (password input)


Date of Birth (date input)


 Use proper className for each input (e.g., "form-input", "form-label").
  Display below the form:

  day-11
12/11/2025

useEffect  is a hook handle side effect

syntax

 useEffect(
  ()={
    <!-- side code -->
  }
 )

 1.  run after all renders

 useEffect(
  ()={
    <!-- side code -->
  }
 )
 2. run only inital render
 useEffect(
  ()={
    <!-- side code -->
  }
  ,[]
 )

[] --> dependancy 
 2. run when state /props change in dependancy array inital render 
name,email,age
useEffect(
  ()={
    <!-- side code -->
  }
  ,[name,age]
 )

 task : 

 useEffect:
 loginForm: Islogin === true ; <AdminDashboard>

 initaialy: useEffect(callback,[])
 callback: 

  task :
 
Full name = state ==> string
user => first and last name inputs
first --> state
last --> state
useeffect(()=>{
  setFullName(`${first} ${last}`)
},[first,last])
2 inputs

  day-12
13/11/2025

BrowserRoutes
     Routes
        Route
     Routes
BrowserRoutes


<!-- import trialImg from "./assets/trial-img.avif";
    <img src={trialImg} alt="Trial" width="200" /> -->