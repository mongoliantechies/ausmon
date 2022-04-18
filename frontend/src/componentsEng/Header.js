import React from "react";
import "../styles/header.css";
import { Slider } from "./slider/Slider";

export const Header = () => {
  return (
    <div className="row">
      <div className="header col">
        <Slider />
      </div>
    </div>
  );
};
