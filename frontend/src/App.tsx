import './App.css';
import Home from './UserManagement/Home/Home';
import NavigationBar from './UserManagement/NavigationBar/NavigationBar';
import UserManagementTable from './UserManagement/UserManagementTable/Table';
import { Routes, Route } from "react-router-dom";
import AddUser from './UserManagement/AddUser/AddUser';
import UpdateUser from './UserManagement/UpdateUser/UpdateUser';


function App() {
  return (
    <div className="App w-screen h-screen relative bg-white">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UserManagementTable/>} />
        <Route path="/add/user" element={<AddUser />}/>
        <Route path="/update/user" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App
