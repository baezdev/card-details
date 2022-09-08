import React from "react";

export const BackCard = (props) => {
  const cvc = props.cvc || "000";

  return (
    <div className="relative w-4/5 mr-0 bg-no-repeat bg-cover shadow-lg rounded-2xl bg-back-card aspect-video justify-self-end">
      <span className="absolute text-lg font-semibold text-white top-[124px] right-14">
        {cvc}
      </span>
    </div>
  );
};
