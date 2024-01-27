import React from "react";

function Carasoulbtns({ setfS, fS, setForward }) {
  return (
    <div
      className="absolute z-40 flex justify-between 
      items-center w-full md:px-20 px-5 "
    >
      <div
        onClick={() => {
          if (fS > 1) {
            setForward(false);
            setfS((prev) => prev - 1);
          }
        }}
        className="w-14 h-14 bg-gray-600 flex cursor-pointer items-center justify-center rounded-full "
      >
        <svg
          id="Layer_1"
          version="1.1"
          viewBox="0 0 18 26"
          height="26px"
          width="15px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <polygon
            fill="white"
            points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 "
          />
        </svg>
      </div>
      <div
        onClick={() => {
          if (fS < 3) {
            setForward(true);
            setfS((prev) => prev + 1);
          }
        }}
        className="w-14 h-14 bg-gray-600 flex cursor-pointer items-center justify-center rounded-full "
      >
        <svg
          className="scale-x-[-1]"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 18 26"
          height="26px"
          width="15px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <polygon
            fill="white"
            points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 "
          />
        </svg>
      </div>
    </div>
  );
}

export default Carasoulbtns;
