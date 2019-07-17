import React, { useEffect, useState } from "react";
import axios from "../../axios";
import _ from "lodash";
import "./recipes.scss";
import CardHome from "../../components/CardHome/CardHome";
import Pagination from "../../components/Pagination/Pagination";

const Recipes = ({ location }: any): JSX.Element => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("");

  const fetchData = async (val: string) => {
    const dataSend = {
      filter: val,
      page: page
    };
    try {
      const data = await axios.post("/api/recipe/getAll", dataSend);
      setData(data.data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    let val = "";
    if (location.state) {
      val = location.state.name;
    }
    setActiveCategory(val);
    fetchData(val);
  }, [location.state, page]);

  const handleClickCategory = (val: string) => () => {
    fetchData(val);
    setActiveCategory(val);
  };

  const handleClickPage = (value: number) => {
    setPage(value);
  };
  return (
    <>
      <div className="recipes__category">
        <div>Kategoria:</div>
        <div
          className={activeCategory === "" ? "activeCategory" : "category"}
          onClick={handleClickCategory("")}
        >
          Wszystko
        </div>
        <div
          className={
            activeCategory === "Śniadania" ? "activeCategory" : "category"
          }
          onClick={handleClickCategory("Śniadania")}
        >
          Śniadania
        </div>
        <div
          className={
            activeCategory === "Przekąski" ? "activeCategory" : "category"
          }
          onClick={handleClickCategory("Przekąski")}
        >
          Przekąski
        </div>
        <div
          className={activeCategory === "Zupy" ? "activeCategory" : "category"}
          onClick={handleClickCategory("Zupy")}
        >
          Zupy
        </div>
        <div
          className={
            activeCategory === "Dania Główne" ? "activeCategory" : "category"
          }
          onClick={handleClickCategory("Dania Główne")}
        >
          Dania Główne
        </div>
        <div
          className={
            activeCategory === "Sałatki" ? "activeCategory" : "category"
          }
          onClick={handleClickCategory("Sałatki")}
        >
          Sałatki
        </div>
        <div
          className={
            activeCategory === "Desery" ? "activeCategory" : "category"
          }
          onClick={handleClickCategory("Desery")}
        >
          Desery
        </div>
        <div
          className={
            activeCategory === "Kolacje" ? "activeCategory" : "category"
          }
          onClick={handleClickCategory("Kolacje")}
        >
          Kolacje
        </div>
      </div>
      <div className="Recipes">
        {data &&
          _.isArray(data.recipes) &&
          data.recipes.map((el: any, i: number) => (
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
      {data && (
        <Pagination total={data.count} page={page} onChange={handleClickPage} />
      )}
    </>
  );
};

export default Recipes;
