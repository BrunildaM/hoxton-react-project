
import Button from "../../Components/Buttons/Buton";

export type User ={
    id: number
    name: string
    username: string
    password: string
}

type Props = {
 
  signIn: (user: User)=> void
}

export function SignIn ({signIn}: Props) {

  function handleSubmit (event: any) {
    event.preventDefault()
    let username = event.target.username.value 
    let password = event.target.password.value

    fetch(`http://localhost:4000/users/${username}`)
    .then(r => r.json())
    .then((user: User) => {
     if (user.password === password)  {
      signIn(user)

     } else {
       alert("Check your username/password please!")

     }
    })

  }


    return (
    <div className="form">
      <form  onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
        
         <Button 
         variant="logIn" >Log In</Button>
     
        </div>
      </form>
      </div>
    )
    
}