import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const GradientLineLeft = (props) => (
  <Svg
    width={132}
    height={3}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h132v3H0z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={126.5}
        y1={1}
        x2={30}
        y2={3}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFED00" />
        <Stop offset={1} stopColor="#27348B" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default GradientLineLeft;
