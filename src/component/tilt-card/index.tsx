import React from "react";
import { Tilt } from "react-tilt";
import classes from "./tilt-card.module.scss";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const TiltCard = (props: any) => {
  const navigate = useNavigate();
  const { title, src, naviagtPath, id } = props;

  const handlOnClickToNavigate = () => {
    navigate(`${naviagtPath}/${id}`);
  };

  return (
    <div>
      <Tilt
        options={defaultOptions}
        style={{
          height: 250,
          width: 250,
          
        }}
        className={classes.tiltCard}
      >

      <div
        style={{
          height: 250,
          width: 250,
        }}
        className={classes.tiltCard}
        onClick={handlOnClickToNavigate}
      >
        <img src={src} alt="" className={classes.cardImage} />
        <div className={classes.title}>{title}</div>
      </div>

      </Tilt>
    </div>
  );
};

export default TiltCard;
