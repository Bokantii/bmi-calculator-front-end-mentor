import React from "react";
import classes from "./Frame6.module.css";
const Frame6 = () => {
  return (
    <div className={classes.frame6}>
      <h3>Enter your details below</h3>
      <form action="">
        <input type="radio" id="metric" />
        <label htmlFor="metric">Metric</label>
        <input type="radio" id="imperial" />
        <label htmlFor="imperial">Imperial</label>
      </form>
      <form action="">
        <input type="radio" id="metric" />
        <label htmlFor="metric">Metric</label>
        <input type="radio" id="imperial" />
        <label htmlFor="imperial">Imperial</label>
      </form>
      <form action="">
        <input type="radio" id="metric" />
        <label htmlFor="metric">Metric</label>
        <input type="radio" id="imperial" />
        <label htmlFor="imperial">Imperial</label>
      </form>
      <form action="">
        <input type="radio" id="metric" />
        <label htmlFor="metric">Metric</label>
        <input type="radio" id="imperial" />
        <label htmlFor="imperial">Imperial</label>
      </form>
      Height Weight Your BMI is...
    </div>
  );
};

export default Frame6;
