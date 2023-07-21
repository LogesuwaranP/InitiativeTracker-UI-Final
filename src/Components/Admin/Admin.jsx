import React, { useContext, useEffect, useLayoutEffect } from "react";

import { useNavigate } from "react-router-dom";

import DataContext from "../../Data/DataContext";

import UserCard from "../User/UserCard";

import { useState } from "react";

import axios from "axios";

import "./Admin.css";
import Search from "../Search/Search";

const Admin = () => {

  const navigate = useNavigate();
  const { authMiddleware, auth, checkValues } = useContext(DataContext);
  const [search, setSearch] = useState("");

  useLayoutEffect(() => {
    if(auth.role!="Admin")
    {
      navigate("/login");
    }
    authMiddleware();
  }, []);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7265/api/User`).then((response) => {
      console.log(response.data);

      setUserList(response.data.value);
    });
  }, []);

  return (
    <div>
    <Search setCommonText={setSearch}/>
    <div className="Admin-card">
      {userList.filter((item) => {
            return item?.userName.toLowerCase().includes(search.toLowerCase())||item?.email.toLowerCase().includes(search.toLowerCase())
            }).map((p) => {
        return (
          <UserCard
            id={p.id}
            name={p.userName}
            email={p.email}
            rating={p.rating}
            bio={p.bio}
            title={p.title}
            shortdescription={p.shortdescription}
            longdescription={p.longdescription}
            createdTime={p.createdTime}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Admin;
