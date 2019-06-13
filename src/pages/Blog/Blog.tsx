import React, { useState, useEffect } from "react";
import _ from "lodash";
import axios from "../../axios";
import LifestyleCardHome from "../../components/LifestyleCardHome/LifestyleCardHome";

import "./blog.scss";

const Blog = (): JSX.Element => {
  const [data, setData] = useState();
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
    </div>
  );
};

export default Blog;
