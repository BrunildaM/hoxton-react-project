import { useEffect, useState } from "react";

type User ={
    id: number
    name: string
    username: string
    password: string
}

export function SignIn () {
    const [users, setUsers] = useState<User[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(()=> {
        fetch("http://localhost:4000/users")
        .then(r=> r.json())
        .then(usersFromDb => setUsers(usersFromDb))
    },[])
  
    return (
    <div className="form">
      <form onSubmit={event =>{
    event.preventDefault()
    }}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      </div>
    )
    
}