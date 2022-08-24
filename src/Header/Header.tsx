import { Link } from "react-router-dom";
import { NameAndLogo } from "./NameAndLogo";
import { SignUp } from "./NavigationList/SignUp";
import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <Link to="/">
        <NameAndLogo />
      </Link>
      <nav className="nav">
        <Link className="link" to="/signIn">
          <button>Sign In</button>
        </Link>
        <Link className="link" to="/signUp">
          <SignUp />
        </Link>
      </nav>
    </div>
  );
}
