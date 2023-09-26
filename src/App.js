import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./admin_dashboard/components/SignUp";
import SignIn from "./admin_dashboard/components/SignIn";
import AdminDashboard from "./admin_dashboard/components/AdminDashboard";
import Products from "./admin_dashboard/components/Products/Products";
import AddNewProducts from "./admin_dashboard/components/Products/AddNewProducts";
import Customers from "./admin_dashboard/components/Customers";
import Orders from "./admin_dashboard/components/Orders/order";
import Analytics from "./admin_dashboard/components/Analytics";
import Invoice from "./admin_dashboard/components/Invoice";
import Settings from "./admin_dashboard/components/Settings";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignUp />} />       
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addnewproduct" element={<AddNewProducts />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
