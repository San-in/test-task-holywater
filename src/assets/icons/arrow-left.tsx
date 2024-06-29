import * as React from "react";
import { SVGProps } from "react";

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M9 6.5 2.5 13 9 19.5"
    />
  </svg>
);
export default ArrowLeftIcon;
