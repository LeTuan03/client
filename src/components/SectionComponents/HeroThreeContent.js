import React from "react";
import classes from "./HeroThreeContent.module.css";

const HeroThreeContent = (props) => {

  return (
    <div className={classes.dish_content}>
      <div className={classes.dish_image_div}>
        <img src={props.src} alt="Dish" />
      </div>
      <div className={classes.dish_text_div}>
        <p>{props.name}</p>
      </div>
    </div>
  );
  //END
};

export default HeroThreeContent;
