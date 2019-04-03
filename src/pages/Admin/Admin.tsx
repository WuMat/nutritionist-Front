import React, { FunctionComponent } from "react";
import "./admin.scss";

const Admin: FunctionComponent = () => {
  const handleSubmit = () => {
    console.log("poszlo");
  };

  const handleChange = () => {
    console.log("input");
  };
  return (
    <>
      <div className="admin">
        <form id="form" onSubmit={handleSubmit} />
        <input
          type="text"
          name="title"
          placeholder="Tytul"
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Opis"
          onChange={handleChange}
        />
        <button type="submit">zapisz do bazy</button>
      </div>
    </>
  );
};

export default Admin;

// TYtul
// opis
// skladniki
//fotka glowna
//fotki poboczne
