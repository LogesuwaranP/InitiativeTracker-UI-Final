import React, { useState } from "react";

import "./Nav.css"; // Import your CSS file
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../Data/DataContext";

const Sidebar = () => {
  const { authMiddleware, auth } = useContext(DataContext);

  const [showMenu, setShowMenu] = useState(false);

  const [sidebarClosed, setSidebarClosed] = useState(true);

  const handleArrowClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleSidebarClick = () => {
    setSidebarClosed((prevState) => !prevState);
  };

  return (
    <>
      {sessionStorage.getItem("auth") ? (
        <div className={`sidebar ${sidebarClosed ? "close" : ""}`}>
          <div className="logo-details">
            <i className="bx bx-menu" onClick={handleSidebarClick}></i>
          </div>

          <ul className="nav-links">
            <Link to="/">
              <li>
                <a>
                  <i className="bx bx-grid-alt"></i>

                  <span className="link_name">Dashboard</span>
                </a>

                <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                  <li>
                    <a className="link_name">Category</a>
                  </li>
                </ul>
              </li>
            </Link>

            <Link to="/profile">
              <li>
                <a>
                  <i className="bx bx-line-chart"></i>

                  <span className="link_name">Chart</span>
                </a>

                <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                  <li>
                    <a className="link_name">Chart</a>
                  </li>
                </ul>
              </li>
            </Link>

            {auth.role == "Approver" ? (
              <Link to="/approve">
                <li>
                  <a>
                    <i className="bx bx-compass"></i>
                    <i class="bi bi-check"></i>
                    <span className="link_name">Pending</span>
                  </a>

                  <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                    <li>
                      <a className="link_name">Pending</a>
                    </li>
                  </ul>
                </li>
              </Link>
            ) : (
              <></>
            )}

            {auth.role == "Admin" ? (
              <Link to="/users">
                <li>
                  <a>
                    <i className="bx bx-history"></i>

                    <span className="link_name">Users</span>
                  </a>

                  <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                    <li>
                      <a className="link_name">Users</a>
                    </li>
                  </ul>
                </li>
              </Link>
            ) : (
              <></>
            )}

            <Link to="/profile-edit">
              <li>
                <a>
                  <i className="bx bx-cog"></i>
                  <span className="link_name"> Edit Profile</span>
                </a>
                <ul className={`sub-menu ${showMenu ? "" : "blank"}`}>
                  <li>
                    <a className="link_name">Setting</a>
                  </li>
                </ul>
              </li>
            </Link>

            <li
              onClick={() => {
                sessionStorage.removeItem("auth");
                authMiddleware();
              }}
            >
              <div className="profile-details">
                <div className="profile-content">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt="profileImg"
                  />
                </div>
                <div className="name-job">
                  <div className="profile_name">{auth.username}</div>
                  <div className="job">{auth.role}</div>
                </div>
                <i className="bx bx-log-out"></i>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
