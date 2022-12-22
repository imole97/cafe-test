import { IconProps } from "@utils/types/types";
import React from "react";

interface Props extends IconProps {
  className?: string;
}

const Next = ({ className }: Props) => {
  return (
    <>
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // className="text-white"
      >
        <path
          d="M1 9L5 5L1 1"
          stroke={className}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Next;
