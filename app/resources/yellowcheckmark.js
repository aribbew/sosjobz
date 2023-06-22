import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const YellowCheckMark = (props) => (
  <Svg
    width={121}
    height={120}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.5}
      width={120}
      height={120}
      rx={60}
      fill="#FFED00"
      fillOpacity={0.17}
    />
    <Path
      d="m48 60 8.333 8.333L73 51.667M98 60c0 20.71-16.79 37.5-37.5 37.5S23 80.71 23 60s16.79-37.5 37.5-37.5S98 39.29 98 60Z"
      stroke="#EADA0D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default YellowCheckMark;
