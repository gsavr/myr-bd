"use client";

import { useState } from "react";
import { Aboreto } from "next/font/google";
import { studioPics } from "@/assets/photos-list";
import { PicGallery } from "@/components/PicGallery";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export default function Photos() {
  const [activeStudio, setActiveStudio] = useState(studioPics[0]);
  console.log(studioPics[0]);

  return (
    <div>
      <div className="flex flex-col items-center ">
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
