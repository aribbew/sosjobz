import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const GradientLineRight = (props) => (
  <Svg
    width={132}
    height={3}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path transform="rotate(-180 132 3)" fill="url(#a)" d="M132 3h132v3H132z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={258.5}
        y1={4}
        x2={162}
        y2={6}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFED00" />
        <Stop offset={1} stopColor="#27348B" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default GradientLineRight;
