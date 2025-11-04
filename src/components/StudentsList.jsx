function StudentsList(){
    const students =['Manu','Anu', "Renu","Babu"]
    return(
        <>
<ul>
{
//     students.map((student,index)=>{
// <li key={index}>{student}</li>
//     })
students.map((student,index)=>(
<li key={index}>{student}</li>
))

}
    </ul>

        </>
    )
}
export default StudentsList;
{/* <ul>
    <li>Manu</li>
    <li>Anu</li>
    <li>Renu</li>
    <li>Babu</li>
</ul> */}