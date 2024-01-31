"use client";

import { useState } from "react";
import { studioPics } from "@/assets/photos-list";
import { PicGallery } from "@/components/PicGallery";
import { abor } from "@/assets/fonts/fonts";

export default function Photos() {
  const [activeStudio, setActiveStudio] = useState(0);
  //console.log(studioPics[0]);

  return (
    <div>
      <div id="image" className="-mt-24 mb-24 block md:hidden"></div>
      <div className=" flex flex-col items-center">
        {/* header */}
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Gallery</h2>
        </div>
        <div>
          {/* Studiopics gallery */}
          <PicGallery
            active={activeStudio}
            setActive={setActiveStudio}
            pics={studioPics}
          />
        </div>
      </div>
    </div>
  );
}
