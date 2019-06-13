import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import _ from "lodash";
import axios from "../../../axios";
import { ArticleState } from "../../../store/reducer/article";
import Podglad from "../../../pages/ViewArticle/Podglad";
import "../admin.scss";

import * as ActionCreators from "../../../store/actionCreator";

interface LifestyleProps extends ArticleState {
  dataView: any;
  add_article_header: (name: string, val: any) => void;
  add_article_paragraf: () => void;
  delete_article_paragraf: (id: number) => void;
  add_paragraf_value: (id: number, val: string) => void;
  add_section: () => void;
  add_section_title: (id: number, val: string) => void;
  delete_section: (id: number) => void;
  add_list: (id: number, idDeep: number) => void;
  list_value: (
    id: number,
    idDeep: number,
    idElement: number,
    val: string
  ) => void;
  delete_list_element: (id: number, idDeep: number, idElement: number) => void;
  add_paragraf_section: (id: number) => void;
  delete_paragraf_section: (id: number, idDeep: number) => void;
  add_value_section: (id: number, idDeep: number, val: string) => void;
  add_img_section: (id: number, idDeep: number, val: any) => void;
  delete_img_section: (id: number, idDeep: number) => void;
}

const Lifestyle = ({ ...props }: LifestyleProps) => {
  const [view, setView] = useState(false);
  // const [img, setImg] = useState<imgState>(initState);

  const makeid = (length: number) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSelectFile = (e?: any, id?: number, idDeep?: number) => {
    let reader = new FileReader();
    const name = e.target.name;
    const nameForSection = makeid(10) + Date.now();
    let file = e.target.files[0];
    reader.onloadend = () => {
      const src = reader.result;
      if (name === "mainImg") {
        props.add_article_header(name, {
          name: nameForSection,
          file: file,
          src: src
        });
      }
      if (name === "name") {
        props.add_img_section(id!, idDeep!, {
          name: nameForSection,
          file: file,
          src: src
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleView = (val: boolean) => () => {
    setView(val);
  };

  const handleClick = async () => {
    const formData = new FormData();

    const images: [{ file: Blob; name: string }?] = [];
    props.epik.map(elEpik =>
      elEpik.paragraf.map(elParagraf =>
        images.push({
          file: elParagraf.img.file,
          name: elParagraf.img.name
        })
      )
    );

    const data = props.epik.map(elEpik => ({
      title: elEpik.title,
      paragraf: elEpik.paragraf.map(elParagraf => ({
        description: elParagraf.description,
        img: elParagraf.img.name,
        list: elParagraf.list
      }))
    }));

    formData.append("title", props.title);
    formData.append("description_short", props.description_short);
    formData.append("mainImage", `${props.mainImg.name}.jpg`);
    formData.append("paragraf", JSON.stringify(props.paragraf));
    formData.append("epik", JSON.stringify(data));
    formData.append("image", props.mainImg.file, `${props.mainImg.name}.jpg`);

    images.map(
      el =>
        el!.file !== null &&
        formData.append("image", el!.file, `${el!.name}.jpg`)
    );

    try {
      const send = await axios.post("/api/lifestyle/getAll", formData);
      console.log(send);
    } catch (error) {
      console.log("Jebany bład");
    }
  };

  return (
    <>
      <button onClick={handleView(!view)}>
        {!view ? "zobacz podglad" : "Wyłącz podgląd"}
      </button>
      {!view && (
        <div className="admin">
          <form id="form" />
          <div className="input__placeholder">
            <input
              type="text"
              name="title"
              required={true}
              value={props.title}
              onChange={e =>
                props.add_article_header(e.target.name, e.target.value)
              }
            />
            <span>Główny tytuł</span>
          </div>
          <div className="input__placeholder">
            <textarea
              name="description_short"
              required={true}
              value={props.description_short}
              onChange={e =>
                props.add_article_header(e.target.name, e.target.value)
              }
            />
            <span>Opis dla miniatury</span>
          </div>
          <div className="img__wrapper">
            <input type="file" name="mainImg" onChange={handleSelectFile} />
            <img src={props.mainImg.src} />
          </div>
          {_.isArray(props.paragraf) &&
            props.paragraf.map((par, index) => (
              <div key={index} className="input__placeholder">
                <textarea
                  name="description"
                  required={true}
                  value={par.description}
                  onChange={e =>
                    props.add_paragraf_value(index, e.target.value)
                  }
                />
                <span>Opis zaraz pod zdjęciem</span>
                <button
                  onClick={() => props.delete_article_paragraf(index)}
                  className="button__article"
                >
                  Usuń
                </button>
              </div>
            ))}
          <button onClick={props.add_article_paragraf}>Dodaj Paragraf</button>
          {_.isArray(props.epik) &&
            props.epik.map((el, index) => (
              <div className="article__wrap" key={index}>
                <p className="Steps">Dodawanie sekcji</p>
                <div className="input__placeholder">
                  <input
                    type="text"
                    name="title"
                    required={true}
                    value={el.title}
                    onChange={e =>
                      props.add_section_title(index, e.target.value)
                    }
                  />
                  <span>Główny tytuł</span>
                  <button
                    className="ingredient_button"
                    onClick={() => props.delete_section(index)}
                  >
                    Usuń
                  </button>
                </div>
                {_.isArray(el.paragraf) &&
                  el.paragraf.map((el, indexDeep) => (
                    <div key={indexDeep} className="input__placeholder">
                      <textarea
                        name="description"
                        required={true}
                        value={el.description}
                        onChange={e =>
                          props.add_value_section(
                            index,
                            indexDeep,
                            e.target.value
                          )
                        }
                      />
                      <span>Paragraf</span>
                      <button
                        onClick={() =>
                          props.delete_paragraf_section(index, indexDeep)
                        }
                        className="button__article"
                      >
                        Usuń
                      </button>

                      <div className="img__wrapper">
                        <input
                          type="file"
                          name="name"
                          onChange={e => handleSelectFile(e, index, indexDeep)}
                        />
                        {el.img.src && <img src={el.img.src} alt="" />}
                        <button
                          className="img__buttonRemove"
                          onClick={() =>
                            props.delete_img_section(index, indexDeep)
                          }
                        >
                          usuń
                        </button>
                      </div>

                      {!_.isEmpty(el.list) &&
                        el.list.map((el, indexList) => (
                          <div key={indexList} className="input__placeholder">
                            <input
                              type="text"
                              name="title"
                              required={true}
                              value={el}
                              onChange={e =>
                                props.list_value(
                                  index,
                                  indexDeep,
                                  indexList,
                                  e.target.value
                                )
                              }
                            />
                            <span>Punkt Listy</span>
                            <button
                              className="ingredient_button"
                              onClick={() =>
                                props.delete_list_element(
                                  index,
                                  indexDeep,
                                  indexList
                                )
                              }
                            >
                              Usuń
                            </button>
                          </div>
                        ))}
                      <button onClick={() => props.add_list(index, indexDeep)}>
                        dodaj punkt listy
                      </button>
                      <br />
                    </div>
                  ))}
                <button onClick={() => props.add_paragraf_section(index)}>
                  Dodaj Paragraf
                </button>
              </div>
            ))}
          <button onClick={props.add_section}> dodaj kolejna sekcje</button>
        </div>
      )}
      {view && <Podglad data={props.dataView} />}
      <button className="sendButton" onClick={handleClick}>
        -- WYSLIJ --
      </button>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    dataView: state.article,
    title: state.article.title,
    description_short: state.article.description_short,
    paragraf: state.article.paragraf,
    epik: state.article.epik,
    mainImg: state.article.mainImg
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    add_article_header: (name: string, val: any) =>
      dispatch(ActionCreators.add_article_header(name, val)),
    add_article_paragraf: () => dispatch(ActionCreators.add_article_paragraf()),
    delete_article_paragraf: (id: number) =>
      dispatch(ActionCreators.delete_article_paragraf(id)),
    add_paragraf_value: (id: number, val: string) =>
      dispatch(ActionCreators.add_paragraf_value(id, val)),
    add_section: () => dispatch(ActionCreators.add_section()),
    add_section_title: (id: number, val: string) =>
      dispatch(ActionCreators.add_section_title(id, val)),
    delete_section: (id: number) => dispatch(ActionCreators.delete_section(id)),
    add_list: (id: number, idDeep: number) =>
      dispatch(ActionCreators.add_list(id, idDeep)),
    list_value: (id: number, idDeep: number, idElement: number, val: string) =>
      dispatch(ActionCreators.list_value(id, idDeep, idElement, val)),
    delete_list_element: (id: number, idDeep: number, idElement: number) =>
      dispatch(ActionCreators.delete_list_element(id, idDeep, idElement)),
    add_paragraf_section: (id: number) =>
      dispatch(ActionCreators.add_paragraf_section(id)),
    delete_paragraf_section: (id: number, idDeep: number) =>
      dispatch(ActionCreators.delete_paragraf_section(id, idDeep)),
    add_value_section: (id: number, idDeep: number, val: string) =>
      dispatch(ActionCreators.add_value_section(id, idDeep, val)),
    add_img_section: (id: number, idDeep: number, val: any) =>
      dispatch(ActionCreators.add_img_section(id, idDeep, val)),
    delete_img_section: (id: number, idDeep: number) =>
      dispatch(ActionCreators.delete_img_section(id, idDeep))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lifestyle);
