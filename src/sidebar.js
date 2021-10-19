import React from "react";

import "./styles.scss";
import Input from "./components/input";
import Footer from "./components/footer";
import { IMG_LOGO } from "./constants";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={IMG_LOGO} />
        <i class="bx bx-menu bx-lg"></i>
      </div>
      <div className="sidebar__input">
        <Input />
      </div>
      <div className="sidebar__item">
        <i className="bx bxs-dashboard bx-md"></i>
        <span>Dashboard</span>
      </div>
      <div className="sidebar__item">
        <i class="bx bx-user-circle bx-md"></i>
        <span>User</span>
      </div>
      <div className="sidebar__item">
        <i class="bx bx-message-dots bx-md"></i>
        <span>Messages</span>
      </div>
      <div className="sidebar__item">
        <i class="bx bx-analyse bx-md"></i>
        <span>Analytics</span>
      </div>
      <div className="sidebar__item">
        <i class="bx bx-file bx-md"></i>
        <span>File manager</span>
      </div>
      <div className="sidebar__item">
        <i class="bx bx-receipt bx-md"></i>
        <span>Order</span>
      </div>
      <div className="sidebar__item">
        <i class="bx bx-save bx-md"></i>
        <span>Saved</span>
      </div>
      <div className="sidebar__item">
        <i class="bx bx-cog bx-md"></i>
        <span>Settings</span>
      </div>
      <div className="sidebar__footer">
        <Footer />
      </div>
    </div>
  );
};

export default SideBar;
