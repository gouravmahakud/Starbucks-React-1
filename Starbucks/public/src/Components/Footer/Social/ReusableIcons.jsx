import React from "react";

export default function ReusableIcons(props) {
  return (
    <div>
      <a aria-label={props.title} href="#">
        {props.children}
      </a>
    </div>
  );
}
