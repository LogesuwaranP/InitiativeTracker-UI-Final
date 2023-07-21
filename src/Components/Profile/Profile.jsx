import "./Profile.css";
// import Nav from "../../Nav/Nav"
import ViewCard from "../ViewCard/ViewCard";
import DataContext from "../../Data/DataContext";
import React, { useLayoutEffect, useContext, useState, useEffect } from "react";
import axios from "axios";
const Profile = () => {
  const { authMiddleware, auth } = useContext(DataContext);
  console.log(auth.id);
  useLayoutEffect(() => {
    authMiddleware();
  }, []);

  const [ideas, setIdeas] = useState({});
  useEffect(() => {
    axios.get(`https://localhost:7265/api/User/${auth.id}`).then((response) => {
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
          src="https://e1.pxfuel.com/desktop-wallpaper/161/735/desktop-wallpaper-7-things-to-know-about-stranger-things-star-natalia-dyer-aka-nancy-wheeler-video-natalia-dyer-stranger-things.jpg"
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
