import React from "react";
import FavoriteImgTxt from "./FavoriteImgTxt";
import TextRate from "./TextRate";

export default function Favorites() {
  return (
    <div>
      <div className="pt-12 mt-16 space-y-6 bg-blue-50">
        <div className="text-xl font-semibold text-center md:mb-14 md:text-3xl smMd:text-2xl">
          <h2>Get your favorites for free</h2>
        </div>
        <div className="flex justify-around text-lg font-normal md:mx-40 md:text-2xl md:justify-evenly">
          <TextRate text="25" className="border-b-4" />
          <TextRate text="50" />
          <TextRate text="150" />
          <TextRate text="200" />
          <TextRate text="400" />
        </div>
      </div>
      <FavoriteImgTxt />
    </div>
  );
}
