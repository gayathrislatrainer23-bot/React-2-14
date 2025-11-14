import { useParams } from "react-router-dom";



const Profile = ()=>{

let {username}= useParams()

// console.log(params,"params")
    return(
        <>
        {/* <h1>Profile page</h1> */}
        <h1>welcome {username}</h1>
 
        </>
    )
}
export default Profile;