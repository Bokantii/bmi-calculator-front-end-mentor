import React from "react";
import Frame6 from "./Frame6";
import Rectangle6 from "./Rectangle6";
import classes from "./HeroMain.module.css";
import GameIcon from "./GameIcon";
const HeroMain = () => {
  return (
    <div className={classes.hero_main}>
      <Rectangle6 />
      <Frame6 />
    </div>
  );
};

export default HeroMain;
