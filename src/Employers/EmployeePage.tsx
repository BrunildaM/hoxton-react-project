import { Link, useParams } from "react-router-dom"

type Employee = {
    email: string,
      name: string,
      profilePic: string,
      salary: number,
      workspace: {
        department: string,
        icon: string,
        contract: string,
        role: string,
        verified: boolean
      },
      createdAt: string,
      updatedAt: string,
      jobs: {
        jobsCount: number,
        positions: string[]
      }
}

type Props = {
    employer: Employee
}


export function EmployeePage ( {employer}: Props) {
    const params = useParams()

    return ( 
        <li>
                <Link to={`/employers/:email`} >
            <img src={employer.profilePic} alt={employer.name} />
            <h3>Name: {employer.name}</h3>
            <h4>E-mail: {employer.email}</h4>
            <p>Department: <img src={employer.workspace.icon} alt="" width={50}/> {employer.workspace.department}</p>
            <p>Role: {employer.workspace.role}</p>
            </Link>
        </li>
    )
}