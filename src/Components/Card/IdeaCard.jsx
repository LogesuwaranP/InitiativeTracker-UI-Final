import { React, useEffect, useState } from "react";
import "./IdeaCard.css";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import Badge from "@mui/material/Badge";
const IdeaCard = ({ id, title, status, like }) => {
  const navigate = useNavigate();
  // console.log(title, id, status);
  const [ideaLike, setideaLike] = useState();
  useEffect(() => {
    axios.get(`https://localhost:7265/api/Idea/${id}`).then((res) => {
      setideaLike(res.data);
    });
  }, []);

  function IncreaseLike() {
    axios.put(`https://localhost:7265/api/Idea/like/${id}`).then((response) => {
      console.log(response);
      axios.get(`https://localhost:7265/api/Idea/${id}`).then((res) => {
        setideaLike(res.data);
      });
    });
  }
  return (
    <div className="ideacard-container">
      <h4>Idea - {id} </h4>
      <p>{title}</p>
      <div className="ideacard-icon">
        <div>
          <IconButton color="primary" onClick={IncreaseLike}>
            <Badge badgeContent={ideaLike?.like} color="primary">
              <FavoriteIcon color="primary" />
            </Badge>
          </IconButton>
        </div>
        <div onClick={() => navigate(`/idea-detailes/${id}`)}>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </div>
        <div className="profile">{}</div>
      </div>
    </div>
  );
};

export default IdeaCard;
