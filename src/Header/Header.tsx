import { Link } from "react-router-dom";
import { NameAndLogo } from "./NameAndLogo";
import { SignUp } from "./NavigationList/SignUp";

export function Header () {
    return (
        <div>
            <Link to='/signIn'> <button>Sign In</button> </Link>
            <Link to='/signUp'><SignUp /></Link>
           <Link to='/'><NameAndLogo /></Link> 
        </div>
    )
}