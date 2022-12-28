//TODO: REPLACE COLOURS WITH IMAGES, fix random black tiles
import React from "react";
import { palette } from "./palette";
import Taggart from "../images/Taggart.jpg";

const assets = [
  {
    title: "Taggart",
    color: palette.PURPLE,
    bannerImage: <img src={Taggart} alt="" />,
  },
  {
    title: "Take The High Road",
    color: palette.PURPLE2,
  },
  {
    title: "Coronation Street",
    color: palette.PURPLE3,
  },
  {
    title: "I'm a Celebrity",
    color: palette.PURPLE,
  },
  {
    title: "Loose Women",
    color: palette.PURPLE2,
  },
  {
    title: "Low Winter Sun",
    color: palette.PURPLE3,
  },
  {
    title: "Litvenenko",
    color: palette.PURPLE,
  },
  {
    title: "Spies Among Friends",
    color: palette.PURPLE2,
  },
  {
    title: "Catch Phrase",
    color: palette.PURPLE3,
  },
];

export default assets;
