import React, { useState } from "react";
import "./admin.scss";

const Admin = () => {
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
        <textarea
          name="ingredients"
          placeholder="Składniki"
          onChange={handleChange}
        />
        <input
          name="imagePreviewUrl1"
          // onChange={handleSelectFile}
          type="file"
          // style={{ display: "none" }}
          multiple
          // ref = {fileInput0 => this.fileInput0 = fileInput0}
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
