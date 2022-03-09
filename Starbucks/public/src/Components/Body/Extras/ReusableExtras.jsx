import React from "react";

export default function ReusableExtras(props) {
  return (
    <div class="flex p-2 md:flex md:flex-col md:mt-5 md:space-x-4">
      <div>
        <img class="max-w-medium md:mx-auto" src={props.src} alt="starbuck 1" />
      </div>
      <dl class="px-3">
        <dt class="text-lg mt-4 font-semibold md:mt-7 md:text-xl">
          {props.title}
        </dt>
        <dd class="text-sm my-4 md:text-base">{props.children}</dd>
        <a href={props.url} class="text-sm text-green-700 underline">
          Learn more
        </a>
      </dl>
    </div>
  );
}
