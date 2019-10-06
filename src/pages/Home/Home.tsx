import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import axios from "../../axios";
import Pagination from "../../components/Pagination/Pagination";
import RecipeCardHome from "../../components/CardHome/CardHome";
import LifestyleCardHome from "../../components/LifestyleCardHome/LifestyleCardHome";

import opneSocket from "socket.io-client";
import "./home.scss";

interface IProps {
  payload: any;
}
const Home = ({ payload }: IProps) => {
  const [page, setPage] = React.useState(1);
  const [slicePayload, setSlicePayload] = React.useState();

  React.useEffect(() => {
    if (page === 1) {
      setSlicePayload(payload.slice(page - 1, page + 3));
    } else {
      setSlicePayload(payload.slice(page * 4 - 4, page * 4));
    }
  }, [page, payload]);

  React.useEffect(() => {
    opneSocket("http://localhost:8080");
  }, []);

  const handleClickPage = (val: number) => {
    setPage(val);
  };
  return (
    <div className="Home">
      {slicePayload &&
        !_.isEmpty(slicePayload) &&
        slicePayload.map((el: any) => (
          <div key={el._id}>
            {el.type === 2 && (
              <LifestyleCardHome
                key={el._id}
                id={el._id}
                title={el.title}
                description_short={el.description}
                mainImage={el.main_img}
              />
            )}

            {el.type === 1 && (
              <RecipeCardHome
                key={el._id}
                kat={el.category}
                title={el.title}
                description_short={el.description}
                main_img={el.main_img}
                id={el._id}
                rate={el.rate}
              />
            )}
          </div>
        ))}
      {slicePayload && !_.isEmpty(slicePayload) && (
        <div className="home__pagination">
          <Pagination
            total={payload.length}
            page={page}
            onChange={handleClickPage}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    payload: state.homeApi.home_data
  };
};
export default connect(mapStateToProps)(Home);
