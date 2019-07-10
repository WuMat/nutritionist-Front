import React, { useState, useEffect } from "react";
import _ from "lodash";
import axios from "../../axios";
import Pagination from "../../components/Pagination/Pagination";
import LifestyleCardHome from "../../components/LifestyleCardHome/LifestyleCardHome";

import "./blog.scss";

const Blog = (): JSX.Element => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    try {
      const data = await axios.post("/api/lifestyle/getAll");
      console.log(data);
      setData(data.data.lifestyles);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickPage = (val: number) => {
    console.log(val);
  };

  return (
    <div className="blog">
      {console.log(data)}
      {_.isArray(data) &&
        data.map((el: any) => (
          <LifestyleCardHome
            key={el._id}
            description_short={el.description_short}
            mainImage={el.mainImage}
            title={el.title}
            id={el._id}
          />
        ))}
      {_.isArray(data) && (
        <Pagination total={40} page={page} onChange={handleClickPage} />
      )}
    </div>
  );
};

export default Blog;
