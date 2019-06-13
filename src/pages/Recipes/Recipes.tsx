import React, { useEffect, useState } from "react";
import axios from "../../axios";
import _ from "lodash";
import "./recipes.scss";
import CardHome from "../../components/CardHome/CardHome";

const Recipes = (): JSX.Element => {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const data = await axios.post("/api/recipe/getAll");
      setData(data.data.recipes);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Recipes">
      {_.isArray(data) &&
        data.map((el: any, i: number) => (
          <CardHome
            key={i}
            kat={el.category}
            title={el.title}
            description_short={el.description_short}
            main_img={el.main_img}
            id={el._id}
          />
        ))}
    </div>
  );
};

export default Recipes;
