import React from "react";

export default function TextRate(props) {
  return (
    <a href="https://devslane.com" target="_blank">
      <div className={`p-3 border-green-700 ${props.className}`}>
        <div className="flex">
          <p className="font-semibold">{props.text}</p>
          <span className="my-auto text-xs text-yellow-500">★</span>
        </div>
      </div>
    </a>
  );
}
