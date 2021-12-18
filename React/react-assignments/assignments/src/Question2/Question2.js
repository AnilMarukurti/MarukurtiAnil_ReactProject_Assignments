import React, {useState} from 'react'

function Question2() {
    const [emp, setName] = useState([{
        name:"Anil",
        job:"Analyst"},
        {
            name:"Gopi",
            job:"Scientist"
        },
        {
            name:"peter",
            job:"Actor"
        }
    ])


    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    
                </tr>
                </thead>

                <tbody>
                { emp.map((emp)=>(
                            <tr>
                                <td>{emp.name}</td>
                                <td>{emp.job}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Question2
