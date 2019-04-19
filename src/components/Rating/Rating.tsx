import React, { useState } from "react";

import "./rating.scss";

interface RatingProps {
  val: number;
  quantity: number;
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

const Rating = ({ val, quantity }: RatingProps) => {
  const [stars, setStars] = useState<StateRating>({
    data: quntityStars(val, quantity)
  });

  const mouseEnter = (i: number) => {
    setStars({ data: quntityStars(i + 1, quantity) });
  };

  const mouseLeave = () => {
    setStars({ data: quntityStars(val, quantity) });
  };

  const handleClick = (i: number) => {
    console.log(i + 1);
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
