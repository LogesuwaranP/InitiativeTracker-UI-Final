import "./Profile.css";
// import Nav from "../../Nav/Nav"
import ViewCard from "../ViewCard/ViewCard";
import DataContext from "../../Data/DataContext";
import React, { useLayoutEffect, useContext, useState, useEffect } from "react";
import axios from "axios";
const Profile = () => {
  const { authMiddleware, auth } = useContext(DataContext);
  console.log(auth.id);
  const newAuth = JSON.parse(sessionStorage.getItem("auth"));

  useLayoutEffect(() => {
    authMiddleware();
  }, []);

  const [ideas, setIdeas] = useState({});
  useEffect(() => {
    axios.get(`https://localhost:7265/api/User/${newAuth.id}`).then((response) => {
      console.log(response.data);
      setIdeas(response.data);
    });
  }, []);

  return (
    <>
      <div className="ProfileBar"></div>
      <div className="ProfileContainer">
        <img
          className="ProfileImage"
          src="data:image/png;base64,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"
        ></img>

        <h4 className="ProfileUser">{ideas.userName}</h4>
        <h6 className="role">{ideas.role?.type}</h6>
        <p className="Bio">{ideas.bio}</p>
        <div className="icon">
          <a href={ideas.linkedin}>
            <img src="https://img.icons8.com/?size=1x&id=13930&format=png"></img>
          </a>
          <a href={ideas.instagram}>
            <img src="https://img.icons8.com/?size=1x&id=Xy10Jcu1L2Su&format=png"></img>
          </a>
        </div>
      </div>

      <ViewCard />
    </>
  );
};

export default Profile;
