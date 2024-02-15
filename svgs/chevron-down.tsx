import React from "react";

type Props = {
  className?: string;
};

const ChevronDown = ({ className }: Props) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  );
};

export default ChevronDown;
