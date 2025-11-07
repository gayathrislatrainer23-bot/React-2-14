const StudentTable = ()=>{
const students =[
    {
    rollNo : 1,
    name   : "Anitha",
    grade  : "A"

    },
       {
    rollNo : 2,
    name   : "Rahul",
    grade  : "A"

    },
       {
    rollNo : 3,
    name   : "Deepak",
    grade  : "A"

    }
]


    return(
        <div className="student-table">
            <table>
                <thead>
                    <tr>

                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    students.map((student,index)=>(

                    <tr key={index}>
                        <td>{student.rollNo}</td>
                        <td>{student.name}</td>
                        <td>{student.grade}</td>
                    </tr>
                    ))

                    }
                </tbody>
            </table>
        </div>
    )
}
export default StudentTable;