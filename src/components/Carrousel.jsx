import { useState } from "react";

export default function Carrousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40 rounded-md`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s}/>;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
        </button>

        <button onClick={nextSlide}>
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full rounded-sm">
        <div className="flex gap-1 bg-[#0009] px-1.5 h-4 items-center justify-center  rounded-lg">
         {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-2 h-2 cursor-pointer ] ${
                i == current ? "bg-[#195ed3] w-8" : "bg-white"
              }`}
            ></div>
          );
        })}
         </div>
      </div>
    </div>
  );
}