import React from "react";

export default function JoinButton(props) {
  return (
    <a
      href={props.linkUrl}
      className={`px-4 py-2 flex-shrink-0 ${props.className} text-white text-sm font-medium text-center border-2 rounded-full lg:${props.lg} md:${props.md}`}
    >
      {props.children}
    </a>
  );
}
