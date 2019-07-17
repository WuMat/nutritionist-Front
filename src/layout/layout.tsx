import React from "react";
import axios from "../axios";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import "./layout.scss";

import Navigation from "../components/navigation/Navigation";
import Header from "../components/Header/Header";
import BottomSlider from "../components/BottomSlider/BottomSlider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [payload, setPayload] = React.useState();

  const shuffle = (val: any) => {
    for (let i = val.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [val[i], val[j]] = [val[j], val[i]];
    }
    return val;
  };

  const fetchData = async () => {
    const response = await axios.post("/api/mix/getImagesBottom");
    const dataArr = [...response.data.lifestyle, ...response.data.recipe];
    const randomArr = shuffle(dataArr);
    setPayload(randomArr);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Layout">
      <Header>
        <Navigation />
      </Header>
      <NavLink to="/admin">
        <p className="adminButton">Admin</p>
      </NavLink>
      <div className="layout__body">
        <div className="layout__content">{children}</div>
        <div className="layout__info">
          {/* <div className="info__title">O mnie</div> */}
          <div className="info__fot">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <BottomSlider images={payload} />
      </div>
    </div>
  );
};

export default Layout;
