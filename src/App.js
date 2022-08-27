import { Route, Routes } from "react-router-dom";
import Chat from "./Pages/Home/Dashboard/Chat/Chat";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import Lead from "./Pages/Home/Dashboard/Lead/Lead";
import Navbar from "./Pages/Shared/Header/Navbar";
import './App.css';

function App() {
  return (
    <div className="bg-base-200">

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
        <Route index element={ <Lead></Lead> }></Route>
          <Route path="chat" element={ <Chat></Chat>  }></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
