import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import "./ViewCard.css";
import axios from "axios";
import DataContext from "../../Data/DataContext";
import React, { useLayoutEffect, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ViewCard() {
  const { authMiddleware, auth } = useContext(DataContext);
  console.log(auth.id);
  const navigate = useNavigate();
  const newAuth = JSON.parse(sessionStorage.getItem("auth"));
  useLayoutEffect(() => {
    authMiddleware();
  }, []);

  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    axios
      .get(`https://localhost:7265/api/Idea/get/${newAuth.id}`)
      .then((response) => {
        console.log(response.data);
        setIdeas(response.data);
      });
  }, []);
  return (
    <>
      <h2 className="title-viewcard">My Post</h2>
      <div className="Bar-viewcard">
        {ideas.map((idea) => (
          <div className="userprofile-card-viewcard">
            <>
              <div className="userprofile-date-viewcard">
                {idea.createdTime}
                <IconButton onClick={() => navigate(`/idea-detailes/${idea.id}`)}>
                  <InfoIcon sx={{ color: "#13266b" }} />
                </IconButton>
              </div>

              <div className="userprofile-detail-viewcard">
                <b>{idea.name}</b>
                <span className="userprofile-idea-viewcard">
                  {idea.shortdescription}
                </span>
                {/* <p className="userprofile-content-viewcard">{idea.longdescription}</p> */}
              </div>
              <div>
                <div className="userprofile-icon-viewcard"></div>
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewCard;
