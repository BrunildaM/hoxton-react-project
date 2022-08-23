import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { EmployeePage } from "./Employers/EmployeePage";
import { EmployersList } from "./Employers/EmployersList";
import { Header } from "./Header/Header";
import { SignIn } from "./Header/NavigationList/SignIn";
import { SignUpForm } from "./Header/NavigationList/SignUpForm";
import { Employee } from "./Pages/Employee";
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
          <Route path="/employers/:email" element={<Employee />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/signIn" element={<SignIn />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
