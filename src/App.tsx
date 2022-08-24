import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { EmployersList } from "./Pages/EmployersList";
import { Header } from "./Header/Header";
import { SignIn } from "./Header/NavigationList/SignIn";
import { SignUpForm } from "./Pages/SignUpForm";
import { EmployerDetails } from "./Pages/EmployerDetails";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employers" element={<EmployersList  />} />
          <Route path="/employers/:id" element={<EmployerDetails />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/signIn" element={<SignIn />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
