import { AdminTypes } from "../action/action";
import { number } from "prop-types";

export const add_article_header = (name: string, val: any) => {
  return {
    type: AdminTypes.ADD_ARTICLE_HEADER,
    name: name,
    val: val
  };
};

export const add_article_paragraf = () => {
  return {
    type: AdminTypes.ADD_ARTICLE_PARAGRAF
  };
};

export const delete_article_paragraf = (id: number) => {
  return {
    type: AdminTypes.DELETE_ARTICLE_PARAGRAF,
    id: id
  };
};

export const add_paragraf_value = (id: number, val: string) => {
  return {
    type: AdminTypes.ADD_PARAGRAF_VALUE,
    id: id,
    val: val
  };
};

export const add_section = () => {
  return {
    type: AdminTypes.ADD_SECTION
  };
};

export const add_section_title = (id: number, val: string) => {
  return {
    type: AdminTypes.ADD_SECTION_TITLE,
    id: id,
    val: val
  };
};

export const delete_section = (id: number) => {
  return {
    type: AdminTypes.DELETE_SECTION,
    id: id
  };
};

export const add_paragraf_section = (id: number) => {
  return {
    type: AdminTypes.ADD_PARAGRAF_SECTION,
    id: id
  };
};

export const delete_paragraf_section = (id: number, idDeep: number) => {
  return {
    type: AdminTypes.DELETE_PARAGRAF_SECTION,
    id: id,
    idDeep: idDeep
  };
};

export const add_value_section = (id: number, idDeep: number, val: string) => {
  return {
    type: AdminTypes.ADD_VALUE_SECTION,
    id: id,
    idDeep: idDeep,
    val: val
  };
};

export const add_list = (id: number, idDeep: number) => {
  return {
    type: AdminTypes.ADD_LIST,
    id: id,
    idDeep: idDeep
  };
};

export const list_value = (
  id: number,
  idDeep: number,
  idElement: number,
  val: string
) => {
  return {
    type: AdminTypes.LIST_VALUE,
    id: id,
    idDeep: idDeep,
    idElement: idElement,
    val: val
  };
};

export const delete_list_element = (
  id: number,
  idDeep: number,
  idElement: number
) => {
  return {
    type: AdminTypes.DELETE_LIST_ELEMENT,
    id: id,
    idDeep: idDeep,
    idElement: idElement
  };
};

export const add_img_section = (id: number, idDeep: number, val: any) => {
  return {
    type: AdminTypes.ADD_IMG_SECTION,
    id: id,
    idDeep: idDeep,
    val: val
  };
};

export const delete_img_section = (id: number, idDeep: number) => {
  return {
    type: AdminTypes.DELETE_IMG_SECTION,
    id: id,
    idDeep: idDeep
  };
};
