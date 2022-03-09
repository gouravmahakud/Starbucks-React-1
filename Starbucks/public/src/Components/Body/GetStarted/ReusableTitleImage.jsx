import React from "react";

export default function ReusableTitleImage(props) {
  const isHidden = props.containsTitle2 ? "hidden" : "block";
  return (
    <div className="flex p-2 md:flex md:flex-col md:space-y-4">
      <div>
        <img
          className="max-w-small md:mx-auto"
          src={props.src}
          alt="starbuck 1"
        />
      </div>
      <dl className="px-3">
        <dt className={`text-lg font-semibold md:${isHidden}`}>
          {props.title1}
        </dt>
        <dt className={`${isHidden} font-semibold text-lg md:block md:mt-0`}>
          {props.title2}
        </dt>
        <dd className="mt-4 text-sm md:text-base">{props.children}</dd>
      </dl>
    </div>
  );
}
