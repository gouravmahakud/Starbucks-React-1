import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import Social from "./Social/Social";

export default function Footer() {
  return (
    <div>
      <Dropdown />
      <hr className="mx-5 mt-10 border-gray-600" />
      <Social />
    </div>
  );
}
