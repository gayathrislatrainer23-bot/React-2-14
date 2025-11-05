function FruitList(){
let fruits =["Apple", "Orange"]
let list = []
  for(let fruit of fruits){
      list.push(<li>{fruit}</li>)          
            }
            return(
                <>
     <ul>
        {
            list
            }
          
     </ul>
     </>
    )
}
export default FruitList