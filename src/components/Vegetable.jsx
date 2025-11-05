

function  Vegetable(){
    let vegetableObject ={
        carrot : 30,
        pototo: 25
    }
    return(
        <div>
            {/* <h1>vegetable</h1> */}
            {
                Object.keys(vegetableObject).map((key,i)=>(
                    <li >{key}: {vegetableObject[key]}</li>
                ))
            }
            {/* = */}
            {/* {
                Object.values(vegetableObject).map((values)=>(
                    <li>{values}</li>
                ))
            } */}
        </div>
    );
}
export default Vegetable