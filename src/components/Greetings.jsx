
const Greetings = ({userName})=>{
//    console.log("props in greetings:", props)
//    console.log("props.uaserName in greetings:", props.userName)

    return(
        <div className="Greetings" style={{color:"red"}}>
   <h1>Good morning</h1>
   <p>{userName}</p>
        </div>
    )
}

export default Greetings;