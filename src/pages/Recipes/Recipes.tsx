import React, { useEffect, useState } from "react";
import axios from "../../axios";
import _ from "lodash";
import "./recipes.scss";
import CardHome from "../../components/CardHome/CardHome";
import Pagination from "../../components/Pagination/Pagination";

const Recipes = ({ location }: any): JSX.Element => {
  const [data, setData] = useState();
  const [page, setPage] = useState(5);

  const fetchData = async (val: string) => {
    const dataSend = {
      filter: val
    };
    try {
      const data = await axios.post("/api/recipe/getAll", dataSend);
      setData(data.data.recipes);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    let val = "";
    if (location.state) {
      val = location.state.name;
    }
    fetchData(val);
  }, [location.state]);

  const handleClickCategory = (val: string) => () => {
    fetchData(val);
  };

  const handleClickPage = (value: number) => {
    console.log(value);
    setPage(value);
  };

  return (
    <>
      <div className="recipes__category">
        <div>Kategoria:</div>
        <div onClick={handleClickCategory("")}>Wszystko</div>
        <div onClick={handleClickCategory("Śniadania")}>Śniadania</div>
        <div onClick={handleClickCategory("Przekąski")}>Przekąski</div>
        <div onClick={handleClickCategory("Zupy")}>Zupy</div>
        <div onClick={handleClickCategory("Dania Główne")}>Dania Główne</div>
        <div onClick={handleClickCategory("Sałatki")}>Sałatki</div>
        <div onClick={handleClickCategory("Desery")}>Desery</div>
        <div onClick={handleClickCategory("Kolacje")}>Kolacje</div>
      </div>
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
              rate={el.rate}
            />
          ))}
      </div>
      <Pagination total={40} page={page} onChange={handleClickPage} />
    </>
  );
};

export default Recipes;
