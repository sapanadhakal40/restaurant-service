
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (

    <div className="flex">
      <ToastContainer />
      <Sidebar />
      <div className="flex-grow "> 
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to Admin Panel</h1>} />
            <Route path="/add-items" element={<Add />} />
            
            <Route path="/list-items" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
