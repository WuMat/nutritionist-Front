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
      const data = await axios.post("/api/lifestyle/getAll", { page });
      setData(data.data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleClickPage = (val: number) => {
    setPage(val);
  };

  return (
    <div className="blog">
      {data &&
        _.isArray(data.lifestyles) &&
        data.lifestyles.map((el: any) => (
          <LifestyleCardHome
            key={el._id}
            description_short={el.description_short}
            mainImage={el.mainImage}
            title={el.title}
            id={el._id}
          />
        ))}
      {data && (
        <div className="blog__pagination">
          <Pagination
            total={data.count}
            page={page}
            onChange={handleClickPage}
          />
        </div>
      )}
    </div>
  );
};

export default Blog;
