"use client";

import { CldImage } from "next-cloudinary";
import { Key, useState } from "react";
import { IconBxsLeftArrow, IconBxsRightArrow } from "./SvgIcons";
import Link from "next/link";

type CloudinaryImageProps = {
  results: {
    resources: any;
  };
};

export const CloudinaryGallery: React.FC<CloudinaryImageProps> = (props) => {
  const {
    results: { resources },
  } = props;
  const [active, setActive] = useState(0);

  /* previous picture in array */
  const setPrevPic = () => {
    if (active == 0) {
      setActive(resources.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  /* next picture in array */
  const setNextPic = () => {
    if (active >= resources.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <div className="grid gap-4">
      <div className="flex w-full items-center justify-center ">
        {/* main image displayed */}
        <button onClick={setPrevPic}>
          <IconBxsLeftArrow />
        </button>
        <CldImage
          onClick={setNextPic}
          priority
          width={700}
          height={700}
          src={resources[active].public_id}
          alt="Myrian Bellydance Austin"
          className="h-auto w-auto max-w-full cursor-pointer rounded object-cover object-center shadow-md md:h-[680px] dark:brightness-90"
        />
        <button onClick={setNextPic}>
          <IconBxsRightArrow />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {/* arrangement of all pics */}
        {resources.length &&
          resources.map((pic: any, index: Key) => {
            return (
              <Link key={pic.public_id} href={"#image"}>
                <CldImage
                  onClick={() => setActive(Number(index))}
                  width={400}
                  height={400}
                  src={pic.public_id}
                  sizes="100vw"
                  alt="Myrian Bellydance Austin"
                  className="h-24 max-w-full  cursor-pointer rounded-lg object-cover object-center shadow md:h-28 dark:brightness-90"
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
