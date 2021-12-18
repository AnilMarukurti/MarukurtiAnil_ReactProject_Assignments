import React,{useState} from "react";
import data from '../addEmployeeQ3/Mock-data.json';


function Employees(){

    /*let nameEl = document.getElementById('Name').value;
    let jobEl = document.getElementById('jobTitle').value;
    let paraEl = document.getElementById("paragraph"); */

    const [emp, useemp]= useState(data);
    const [addfrom, setfrom]=useState({
        Name:'',
        Job:''
    })
    const handelFromChange =(event)=>{
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newaddfrom={...addfrom};
        newaddfrom[fieldName]= fieldValue;
        setfrom(newaddfrom);
    };
    const handelFromSubmit=(event)=>{
        event.preventDefault();
        /*if (nameEl === "" || jobEl === ""){
            paraEl.textContent = "Please Enter Name and job"
        }*/
        const newdata={
            Name: addfrom.Name,
            Job: addfrom.Job
        };
        const newdatas=[...emp, newdata];
        useemp(newdatas);
    };
    const deletData=(id)=>{
            
            const updateitems= emp.filter((ele, ind)=>{
                return id !== ind;
               
            })
            
            useemp(updateitems)
            }
            
        
    return(
        <div>
            <h2 >Add  Employee</h2>
            <from>
                <label for="Name">Name</label><br/>
                <input type="text" name="Name" required="required" placeholder="Enter the name" id="Name" onChange={handelFromChange}/> 
                 <br/>

                <label for="jobTitle">Job</label><br/>
                <input type="text" name="Job" required="required" placeholder="Enter the job title" id="jobTitle" onChange={handelFromChange}/>
                <br/>
                <button type="submit" onClick={handelFromSubmit} >Add</button>
            </from>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                </tr>
                </thead>
                
                <tbody>
                    { emp.map((emp, ind)=>(
                            <tr>
                                    <td>{emp.Name}</td>
                                    <td>{emp.Job}</td>
                                    <td><button className="btn" onClick={()=>deletData(ind)}>delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
 
            </table>

            <p id="paragraph"></p>
            
        </div>
    );
}
export default Employees;