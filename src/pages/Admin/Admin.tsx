import React, { useState } from "react";
import Recipe from "./Recipe/Recipe";
import Lifestyle from "./Lifestyle/Lifestyle";

const Admin: React.FC = () => {
  const [state, setstate] = useState();

  const handleClick = (val: number) => () => {
    setstate(val);
  };
  return (
    <>
      <button className="button_choice" onClick={handleClick(1)}>
        Dodaj Przepis
      </button>
      <button className="button_choice" onClick={handleClick(2)}>
        Dodaj Artykuł
      </button>

      {state === 1 && <Recipe />}
      {state === 2 && <Lifestyle />}
    </>
  );
};

export default Admin;
