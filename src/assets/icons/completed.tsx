import * as React from "react";
import { SVGProps } from "react";

const CompletedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={118} height={118} fill="none" {...props}>
    <path fill="url(#c)" d="M0 0h118v118H0z" />
    <defs>
      <pattern
        id="c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#d" transform="scale(.00417)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="d"
        width={240}
        height={240}
      />
    </defs>
  </svg>
);
export default CompletedIcon;