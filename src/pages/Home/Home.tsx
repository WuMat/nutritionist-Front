import React from "react";
import "./home.scss";
import CardHome from "../../components/CardHome/CardHome";

const Home = () => {
  return (
    <>
      <div className="Home">
        <CardHome title="zajebista zupa xD" kat="zupy" />
        <CardHome title="pyszne kotleciki :D" kat="dania glowne" />
        <CardHome title="zajebista zupa xD" kat="zupy" />
        <CardHome title="pyszne kotleciki :D" kat="dania glowne" />
      </div>
    </>
  );
};

export default Home;
