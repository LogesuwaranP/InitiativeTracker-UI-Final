import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import "./ViewCard.css";
import axios from "axios";
import DataContext from "../../Data/DataContext";
import React, { useLayoutEffect, useContext, useState, useEffect } from "react";

function ViewCard() {
  const { authMiddleware, auth } = useContext(DataContext);
  console.log(auth.id);
  useLayoutEffect(() => {
    authMiddleware();
  }, []);

  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    axios
      .get(`https://localhost:7265/api/Idea/get/${auth.id}`)
      .then((response) => {
        console.log(response.data);
        setIdeas(response.data);
      });
  }, []);
  return (
    <>
      <h2 className="title">My Post</h2>
      <div className="Bar">
        {ideas.map((idea) => (
          <div className="userprofile-card">
            <>
              <div className="userprofile-date">
                {idea.createdTime}
                <IconButton>
                  <InfoIcon sx={{ color: "#13266b" }} />
                </IconButton>
              </div>

              <div className="userprofile-detail">
                <b>{idea.name}</b>
                <span className="userprofile-idea">
                  {idea.shortdescription}
                </span>
                <p className="userprofile-content">{idea.longdescription}</p>
              </div>
              <div>
                <div className="userprofile-icon"></div>
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewCard;
