import React, { useState } from "react";
import Image from "next/image";

function SelectStyle({ onUserSelect }) {
  const styleOptions = [
    {
      name: "Realistic",
      image: "/real.png",
    },
    {
      name: "Cartoon",
      image: "/cartoon.png",
    },
    {
      name: "Watercolor",
      image: "/watercolor.png",
    },
    {
      name: "Anime",
      image: "/anime.png",
    },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="flex flex-col mt-5 gap-4">
      <h2 className="font-bold text-xl text-primary dark:text-foreground">
        Select Style
      </h2>
      <p className="text-muted-foreground">Choose a style for your video</p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 max-w-[1200px] mx-auto">
          {styleOptions.map((item, index) => {
            return (
              <div
                className={`relative hover:scale-105 transition-all duration-300 cursor-pointer border-4 rounded-xl w-[120px] mx-auto ${
                  selectedOption === item.name
                    ? "border-primary"
                    : "border-transparent"
                }`}
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full rounded-lg"
                  style={{ height: "auto" }}
                  onClick={() => {
                    setSelectedOption(item.name);
                    onUserSelect("imageStyle", item.name);
                  }}
                />
                <h2 className="text-center text-lg font-bold text-primary dark:text-foreground">
                  {item.name}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SelectStyle;
