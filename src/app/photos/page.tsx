//"use client";
import { abor } from "@/assets/fonts/fonts";
import cloudinary from "cloudinary";
import { CloudinaryGallery } from "@/components/CloudinaryGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Myrian Bellydancing Austin",
  description: "Browse my gallery of professional and performance photos",
};

type SearchResults = {
  publid_id: string;
};

export default async function Photos() {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image`)
    .sort_by("created_at", "desc")
    .max_results(50)
    .execute()) as { resources: SearchResults[] };

  return (
    <div>
      <div id="image" className="-mt-24 mb-24 block md:hidden"></div>
      <div className=" flex flex-col items-center">
        {/* header */}
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Gallery</h2>
        </div>
        <div>
          {/* Pics gallery */}
          <CloudinaryGallery results={results} />
        </div>
      </div>
    </div>
  );
}
