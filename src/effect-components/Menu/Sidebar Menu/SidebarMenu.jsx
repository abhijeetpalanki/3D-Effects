import React, { useEffect } from "react";
import "./SidebarMenu.css";

const SidebarMenu = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let menuToggle = document.querySelector(".sidebar__wrapper .toggle");
    let navigation = document.querySelector(".sidebar__wrapper .navigation");

    menuToggle.onclick = function () {
      menuToggle.classList.toggle("active");
      navigation.classList.toggle("active");
    };

    let list = document.querySelectorAll(
      ".sidebar__wrapper .navigation ul .list"
    );

    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active";
      };
    }
  }, []);

  return (
    <div className="sidebar__wrapper">
      <div className="navigation">
        <ul>
          <li className="list active">
            <b></b>
            <b></b>
            <a href="!#" onClick={handleClick}>
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="!#" onClick={handleClick}>
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="title">Profile</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="!#" onClick={handleClick}>
              <span className="icon">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </span>
              <span className="title">Messages</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="!#" onClick={handleClick}>
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="title">Settings</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="!#" onClick={handleClick}>
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="!#" onClick={handleClick}>
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span className="title">Password</span>
            </a>
          </li>
          <li className="list">
            <b></b>
            <b></b>
            <a href="!#" onClick={handleClick}>
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="toggle">
        <div className="open">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="close">
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
