import React, { useContext } from "react";
import { defaultLang } from "../../../App";
import { useParams } from "react-router-dom";

export let PortfolioTitle = {
  en: "Portfolio",
  es: "Portfolio",
  it: "Portfolio",
  de: "Portfolio",
};
export default function Portfolio() {
  const { lang, id } = useParams();
  const language =  lang || defaultLang;
  return <></>;
}
