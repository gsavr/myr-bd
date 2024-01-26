"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key } from "react";

interface PicGalleryProps {
  active: any;
  setActive: any;
  pics: any;
}

export const PicGallery: React.FC<PicGalleryProps> = (props) => {
  const { active, setActive, pics } = props;

  return (
    <div className="grid gap-4">
      <div className="flex w-full items-center justify-center ">
        <Image
          className="h-auto w-auto max-w-full rounded object-cover object-center shadow-md md:h-[680px]"
          width={400}
          height={400}
          src={active}
          alt="gallery picture"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {pics.map(
          (imgelink: string | StaticImport, index: Key | null | undefined) => (
            <div key={index}>
              <Image
                width={400}
                height={400}
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center shadow"
                alt="gallery-image"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};
