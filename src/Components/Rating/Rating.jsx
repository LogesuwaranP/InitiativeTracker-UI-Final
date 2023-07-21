import React, { useState } from "react";
import StarRating from "./StarRating";
import axios from "axios";

const Rating = ({ setStarRating, starRating, val,updateRating,id,setIdeas2 }) => {
  const [rating, setRating] = useState(0);

  const handleSelect = (selectedRating) => {
    if (selectedRating <= rating) {
      console.log(selectedRating);
      updateRating()
      // If the selected rating is less than or equal to the current rating,
      // reset the rating to 0 (unselect all stars)
      setRating(0);
    } else {
      console.log(selectedRating);
      updateRating()
      // Otherwise, set the rating to the selected value
      setStarRating(selectedRating);
    }
    console.log(selectedRating);
    axios
    .put(`https://localhost:7265/api/User/Rating`, {
      id: id,
      rating:selectedRating
    }).then((response)=>{
      setIdeas2(response.data)
    })
    
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <StarRating
          key={value}
          selected={value <= starRating}
          onSelect={() => handleSelect(value)}
        />
      ))}
    </div>
  );
};

export default Rating;
