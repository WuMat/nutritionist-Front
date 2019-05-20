import React from "react";
import "./viewArticle.scss";
import _ from "lodash";

import { data } from "./data";

const ViewArticle = () => {
  return (
    <div className="article">
      <div className="article__title">{data.title}</div>
      <img className="article__img" src={data.mainImg} alt="" />
      <div className="article__info">
        <span />
        <p>{data.date}</p>
        <span />
      </div>
      <p className="article__description">{data.description}</p>

      {_.isArray(data.epik) &&
        data.epik.map((el: any, i) => (
          <div key={i}>
            <p>&nbsp;</p>
            <p className="epik__title">{el.title}</p>

            {el.paragraf.map((el: any, i: any) => (
              <div key={i}>
                <p className="epik__description">{el.description}</p>
                {el.img && <img className="article__img" src={el.img} alt="" />}
                {el.list && (
                  <ul className="epik__ul">
                    {el.list.map((el: string, i: number) => (
                      <li key={i} className="epik__li">
                        {el}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ViewArticle;
