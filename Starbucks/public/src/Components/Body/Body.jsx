import React from "react";
import Extras from "./Extras/Extras";
import Favorites from "./Favorites/Favorites";
import Payment from "./Payment/Payment";
import GetStarted from "./GetStarted/GetStarted.jsx";
import StarCodes from "./StarCodes/StarCodes";
import ExtraTerms from "./Terms/ExtraTerms";

export default function Body() {
  return (
    <div>
      <GetStarted />
      <Favorites />
      <Extras />
      <Payment />
      <StarCodes />
      <ExtraTerms />
      <hr class="border border-gray-600" />
    </div>
  );
}
