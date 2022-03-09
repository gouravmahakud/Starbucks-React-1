import React from "react";

export default function ReusableTitle(props) {
  return (
    <dl className="mt-14 full:w-72">
      <dt className="flex text-lg font-bold md:text-2xl">
        {props.text}
        <span className="my-auto text-sm">★</span>
        per dollar
      </dt>
      <dd className="mt-1 text-sm md:text-base">{props.children}</dd>
    </dl>
  );
}
