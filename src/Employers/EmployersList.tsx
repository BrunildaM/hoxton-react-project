import { useEffect, useState } from "react"
import { EmployeePage } from "./EmployeePage"



export function EmployersList () {

    const [employers, setEmployers] = useState([])

    useEffect(()=> {
        fetch("http://localhost:4000/employers")
        .then(r=> r.json())
        .then(employersFromDb =>setEmployers(employersFromDb))
    }, [])

    return (
        <div>
            <ul>{employers.map(employer => (
                <EmployeePage employer={employer}/>
            ))}

            </ul>
            // when you click on one employer you can see all the details related to him/her so get redirected to EmployeePage
        </div>
    )
}