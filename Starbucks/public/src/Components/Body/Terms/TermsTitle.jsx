import React from "react";

export default function TermsTitle(props) {
  return (
    <h2 className="font-semibold tracking-wider text-gray-600 uppercase md:text-base">
      {props.children}
    </h2>
  );
}
