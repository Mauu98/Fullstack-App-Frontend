import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeesList />}></Route>
          <Route path="/" element={<EmployeesList />}></Route>
          <Route path="/employeeList" element={<EmployeesList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
