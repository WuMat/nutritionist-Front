import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { URL } from "../../utils/URL";

import "./viewArticle.scss";
import _ from "lodash";

interface IProps extends RouteComponentProps<any> {
  props: any;
}

const ViewArticle = ({ ...props }: IProps) => {
  const [payload, setPayload] = useState();
  const fetchData = async () => {
    const data = props.location.state;
    try {
      const response = await axios.post("/api/lifestyle/getOne", { data });
      setPayload(response.data.lifestyle);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {!_.isEmpty(payload) && (
        <div className="article">
          <div className="article__title">{payload.title}</div>
          <img
            className="article__img"
            src={`${URL}${payload.mainImage}`}
            alt=""
          />
          <div className="article__info">
            <span />
            <p>{payload.date}</p>
            <span />
          </div>
          {_.isArray(payload.paragraf) &&
            payload.paragraf.map((val: any, i: number) => (
              <p key={i} className="epik__description">
                {val.description}
              </p>
            ))}

          {_.isArray(payload.epik) &&
            payload.epik.map((el: any, i: number) => (
              <div key={i}>
                <p>&nbsp;</p>
                <p className="epik__title">{el.title}</p>

                {el.paragraf.map((el: any, i: any) => (
                  <div key={i}>
                    <p className="epik__description">{el.description}</p>
                    {el.img && (
                      <img
                        className="article__img"
                        src={`${URL}${el.img}.jpg`}
                        alt=""
                      />
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

export default withRouter(ViewArticle);
