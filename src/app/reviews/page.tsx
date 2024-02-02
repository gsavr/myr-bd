import { abor } from "@/assets/fonts/fonts";
import { reviews } from "@/assets/reviews-list";
import { IconStar } from "@/components/SvgIcons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews | Myrian Bellydancing Austin",
  description: "See my client reviews from Gigsalad",
};

export default function Reviews() {
  return (
    <div className=" w-full">
      <div className="flex  w-full flex-col items-center">
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Client Reviews</h2>
        </div>
        <div className="flex flex-col">
          {reviews.map((review) => {
            return (
              <div
                key={review.date}
                className=" my-3 rounded bg-[#E9EBF1] p-3 text-left shadow-inner dark:bg-[#222526]"
              >
                <div className="flex items-center text-sm">
                  Client name: {review.reviewer}
                  <span className="flex pl-3 text-yellow-600">
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                  </span>
                </div>
                <div className="text-xl font-bold">{review.title}</div>
                <div>{review.content}</div>
              </div>
            );
          })}
        </div>

        <div></div>
      </div>
    </div>
  );
}
