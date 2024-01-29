"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

type PicGalleryProps = {
  active: any;
  setActive: any;
  pics: any;
};

export const PicGallery: React.FC<PicGalleryProps> = (props) => {
  const { active, setActive, pics } = props;
  //console.log(active);

  /* next picture in array */
  const setPrevPic = () => {
    if (active == 0) {
      setActive(pics.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  /* previous picture in array */
  const setNextPic = () => {
    if (active >= pics.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <div className="grid gap-4">
      <div className="flex w-full items-center justify-center ">
        {/* main image displayed */}
        <button onClick={setPrevPic}>PREV</button>
        <Image
          className="h-auto w-auto max-w-full cursor-pointer rounded object-cover object-center shadow-md md:h-[680px]"
          onClick={setNextPic}
          width={400}
          height={400}
          src={pics[active]}
          alt="Myrian Bellydance Austin"
        />{" "}
        <button onClick={setNextPic}>NEXT</button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {/* arrangement of all pics */}
        {pics.map(
          (imgelink: string | StaticImport, index: Key | null | undefined) => (
            <Link key={index} href={"#image"}>
              <Image
                width={400}
                height={400}
                onClick={() => setActive(Number(index))}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center shadow"
                alt="Myrian Bellydance Austin"
              />
            </Link>
          ),
        )}
      </div>
    </div>
  );
};
