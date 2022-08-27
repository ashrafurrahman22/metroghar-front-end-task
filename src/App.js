import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import Navbar from "./Pages/Shared/Header/Navbar";

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
