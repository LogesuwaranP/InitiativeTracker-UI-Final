import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import Badge from "@mui/material/Badge";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./User.css";
import Rating from "../Rating/Rating";
import axios from "axios";
import DataContext from "../../Data/DataContext";
import React, { useLayoutEffect, useContext, useState, useEffect } from "react";

const Card = ({ name, email, rating, bio, id }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [starRating, setStarRating] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  var newRole = 3;

  const [selectValueRole, setSelectValueRole] = useState();
  const updateRating = () => {
    
  };

  const submitUser = () => {
    console.log(selectValueRole , id, "rating");
    axios
    .put(`https://localhost:7265/api/User`, {
      rId: selectValueRole?selectValueRole:ideas2.rid,
      id: id,
    })
    .then((respon) => {
      console.log(respon);
    });    
  };

  const { authMiddleware, auth } = useContext(DataContext);
  console.log(auth, "auth val");


  const [role, setRole] = useState([]);
  const [ideas1, setIdeas1] = useState({});
  const [ideas2, setIdeas2] = useState({});

  useEffect(() => {
    axios.get(`https://localhost:7265/api/User/${id}`).then((response) => {
      setIdeas2(response.data);
    });

    axios.get(`https://localhost:7265/api/Idea/get/${id}`).then((response) => {
      setIdeas1(response.data);
    });

    axios.get(`https://localhost:7265/api/Role`).then((response) => {
      setRole(response.data);
    });
  }, []);

  return (
    <div className={`usercard-flip-container ${isFlipped ? "flipped" : ""}`}>
      <div className="usercard-flipper">
        <div className="usercard-front">
          <div className="usercard-name">
            <b>{name}</b>
          </div>
          <div className="usercard-mail">{email}</div>
          <div className="usercard-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/236/236832.png?w=740&t=st=1689900133~exp=1689900733~hmac=82b232f3a0ae0488566428edd40ab111a5913c86334658144f39f409408916b2"
              className="usercard-userimg"
              alt="User"
            />
          </div>
          <div className="usercard-icon">
            <button className="usercard-icons">
              <Badge badgeContent={ideas2.rating} color="primary">
                <StarOutlineIcon />
              </Badge>
            </button>
            <button className="usercard-icons">
              <Badge badgeContent={ideas1.length} color="primary">
                <EmojiObjectsOutlinedIcon />
              </Badge>
            </button>
          </div>
          <div className="usercard-bio">{bio}</div>
          <div className="usercard-button">
            <button className="usercard-edit SUBMIT" onClick={handleFlip}>
              Edit
            </button>
          </div>
        </div>
        <div className="usercard-back">
          <div className="usercard-back-con">
            <div className="usercard-back-name">
              <b>{name}</b>
            </div>
            <div className="usercard-back-rating">
              Rating:
              <Rating
                starRating={starRating}
                setStarRating={setStarRating}
                val={ideas2.rating}
                updateRating={updateRating}
                id={id}
                setIdeas2={setIdeas2}
              />
            </div>
            <div className="usercard-back-Role">
              <select onChange={(e) => setSelectValueRole(e.target.value)}>
                <option defaultValue disabled>
                  Select Role
                </option>
                {role.map((rol) => (
                  <option value={rol.id} className="usercard-back-drop-down">
                    {rol.type}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="usercard-submit SUBMIT"
              onClick={() => {
                handleFlip();
                submitUser();
              }}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
