import React, { useState } from "react";
import axios from "../../axios";

import "./rating.scss";

interface RatingProps {
  val: number;
  quantity: number;
  id: any;
}

interface StateRating {
  data: boolean[];
}

const quntityStars = (val: number, quantity: number) => {
  const allArr = [];
  const fillStars = Math.round(val);

  for (let i = 0; i < fillStars; i++) {
    allArr.push(false);
  }

  const emptyStarts = quantity - fillStars;
  for (let i = 0; i < emptyStarts; i++) {
    allArr.push(true);
  }
  return allArr;
};

const Rating = ({ val, quantity, id }: RatingProps) => {
  const [stars, setStars] = useState<StateRating>({
    data: quntityStars(val, quantity)
  });
  const [starsClick, setStarsClick] = useState(val);

  const mouseEnter = (i: number) => {
    setStars({ data: quntityStars(i + 1, quantity) });
  };

  const mouseLeave = () => {
    setStars({ data: quntityStars(starsClick, quantity) });
  };

  const handleClick = async (i: number) => {
    const rateClick = i + 1;
    setStarsClick(rateClick);
    const data = {
      id: id,
      rate: rateClick
    };
    try {
      await axios.post("/api/recipe/update", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="rating">
        {stars.data.map((val, i) =>
          val ? (
            <i
              key={i}
              className="far fa-star"
              onMouseEnter={() => mouseEnter(i)}
              onMouseLeave={mouseLeave}
              onClick={() => handleClick(i)}
            />
          ) : (
            <i
              key={i}
              className="fas fa-star"
              onMouseEnter={() => mouseEnter(i)}
              onMouseLeave={mouseLeave}
              onClick={() => handleClick(i)}
            />
          )
        )}
      </div>
    </>
  );
};

export default Rating;
