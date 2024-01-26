import Image from "next/image";
import Link from "next/link";
import { Aboreto } from "next/font/google";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export default function Videos() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Videos</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
}
