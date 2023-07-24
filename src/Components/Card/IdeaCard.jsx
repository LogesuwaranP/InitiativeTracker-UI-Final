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
  const [ideaLike, setideaLike] = useState(0);
  useEffect(() => {
    axios.get(`https://localhost:7265/api/Idea/${id}`).then((res) => {
      setideaLike(res.data);
    });
  }, []);

  function IncreaseLike() {
    axios.put(`https://localhost:7265/api/Idea/like/${id}`).then((response) => {
      setideaLike(response.data);
  console.log(response.data,ideaLike);
    });
  }
  return (
    <div className="ideacard-container">
      <h4>Idea - {id} </h4>
      <p>{title}</p>
      <div className="ideacard-icon">
        <div>
        <Badge badgeContent={0} color="primary">
          <IconButton color="primary" onClick={IncreaseLike}>
            
              <FavoriteIcon color="primary" />

          </IconButton>
          </Badge>
        </div>
        <div onClick={() => navigate(`/idea-detailes/${id}`)}>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </div>
        <div className="profile"><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1689907278~exp=1689907878~hmac=fe5a04a5bff15b201a7c0056d4ee88d526d10f59655c0c7f537ea6200243b227" width={"30px"} height={"30px"}/></div>
      </div>
    </div>
  );
};

export default IdeaCard;
