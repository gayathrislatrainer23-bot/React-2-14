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

State : spacial memory inside comp that hold data which can change over time
hooks: special fun:s used to state management ,life cycle metnods and  side effect
useState : hook used to manage state.
const [state, setState] = useState(0)
events:action performed by user
synthetic events : react wrap html events.

task:
1. increment not leads to 10 and decrement not leads to less than 0
2. reset btn






