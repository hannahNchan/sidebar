import React, { useEffect } from "react";

import "./styles.scss";
import Input from "./components/input";
import Footer from "./components/footer";
import { IMG_LOGO } from "./constants";

const SideBar = () => {
  useEffect(() => {
    const getHamburguer = document.getElementById("openClose");
    const getSidebar = document.getElementsByClassName("sidebar")[0];
    getHamburguer.addEventListener("click", function () {
      getSidebar.classList.toggle("close-sidebar");
    });

    return () => {
      const getHamburguer = document.getElementById("openClose");
      getHamburguer.removeEventListener("click", () => {
        console.log("removed");
      });
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={IMG_LOGO} alt="Logo" />
        <i id="openClose" className="bx bx-menu bx-lg"></i>
      </div>
      <div className="sidebar__input">
        <Input />
      </div>
      <div className="sidebar__item">
        <i className="bx bxs-dashboard bx-md"></i>
        <span>Dashboard</span>
        <span class="tooltip">Dashboard</span>
      </div>
      <div className="sidebar__item">
        <i className="bx bx-user-circle bx-md"></i>
        <span>User</span>
        <span class="tooltip">User</span>
      </div>
      <div className="sidebar__item">
        <i className="bx bx-message-dots bx-md"></i>
        <span>Messages</span>
        <span class="tooltip">Messages</span>
      </div>
      <div className="sidebar__item">
        <i className="bx bx-analyse bx-md"></i>
        <span>Analytics</span>
        <span class="tooltip">Analytics</span>
      </div>
      <div className="sidebar__item">
        <i className="bx bx-file bx-md"></i>
        <span>File manager</span>
        <span class="tooltip">File manager</span>
      </div>
      <div className="sidebar__item">
        <i className="bx bx-receipt bx-md"></i>
        <span>Order</span>
        <span class="tooltip">Order</span>
      </div>
      <div className="sidebar__item">
        <i className="bx bx-save bx-md"></i>
        <span>Saved</span>
        <span class="tooltip">Saved</span>
      </div>
      <div className="sidebar__item">
        <i className="bx bx-cog bx-md"></i>
        <span>Settings</span>
        <span class="tooltip">Settings</span>
      </div>
      <div className="sidebar__footer">
        <Footer />
      </div>
    </div>
  );
};

export default SideBar;
