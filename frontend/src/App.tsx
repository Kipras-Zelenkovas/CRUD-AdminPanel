import './App.css';
import Home from './UserManagement/Home/Home';
import NavigationBar from './UserManagement/NavigationBar/NavigationBar';
import UserManagementTable from './UserManagement/UserManagementTable/Table';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App w-screen h-screen relative bg-white">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UserManagementTable/>} />
      </Routes>
    </div>
  );
}

export default App
