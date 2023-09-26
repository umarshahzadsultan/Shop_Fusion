import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Sidebar.css";
import logo from "../../assets/images/logo_transparent.png";
import {
  AiOutlineDashboard,
  AiFillContainer,
  AiFillProfile,
} from "react-icons/ai";
import { FaUsers, FaShoppingCart } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { SlSettings } from "react-icons/sl";


const Sidebar = () => (
  <div>
    <div className="logo">
      <div>
        <Link
          to="/admindashboard"
        >
          <img src={logo} alt="" />
        </Link>
      </div>
    </div>
    <div className="sidebar">
      <ul>
        <li>
          <p>APPLICATION</p>
        </li>
        <li>
          <Link to="/admindashboard">
            <AiOutlineDashboard />
            &nbsp; Dashboard
          </Link>
        </li>
        <li>
          <Link to="/products">
            <AiFillContainer />
            &nbsp; Products
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <FaUsers />
            &nbsp; Customers
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <FaShoppingCart />
            &nbsp; Orders
          </Link>
        </li>
        {/* <li>
          <Link to="/inbox">
            <FaEnvelope />
            &nbsp; Inbox
          </Link>
        </li> */}
        {/* <li>
          <Link to="/filemanager">
            <AiFillFileAdd />
            &nbsp; File Manager
          </Link>
        </li>
        <li>
          <Link to="/calender">
            <BiCalendar />
            &nbsp; Calendar
          </Link>
        </li> */}
        <li>
          <Link to="/analytics">
            <SiGoogleanalytics />
            &nbsp; Analytics
          </Link>
        </li>
        <li>
          <Link to="/invoice">
            <AiFillProfile />
            &nbsp; Invoice
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <SlSettings />
            &nbsp; Settings
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
