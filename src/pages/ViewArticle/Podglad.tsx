import React from "react";
import "./viewArticle.scss";
import _ from "lodash";

import { data } from "./data";

interface IProps {
  data: any;
}

const ViewArticle = ({ data }: IProps) => {
  return (
    <>
      {!_.isEmpty(data) && (
        <div className="article">
          <div className="article__title">{data.title}</div>
          <img className="article__img" src={data.mainImg.src} alt="" />
          <div className="article__info">
            <span />
            <p>{data.date}</p>
            <span />
          </div>
          {_.isArray(data.paragraf) &&
            data.paragraf.map((val: any, i: number) => (
              <p key={i} className="epik__description">
                {val.description}
              </p>
            ))}

          {_.isArray(data.epik) &&
            data.epik.map((el: any, i: number) => (
              <div key={i}>
                <p>&nbsp;</p>
                <p className="epik__title">{el.title}</p>

                {el.paragraf.map((el: any, i: any) => (
                  <div key={i}>
                    <p className="epik__description">{el.description}</p>
                    {el.img.src && (
                      <img className="article__img" src={el.img.src} alt="" />
                    )}
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
      )}
    </>
  );
};

export default ViewArticle;
