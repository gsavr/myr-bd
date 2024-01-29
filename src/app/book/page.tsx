import Link from "next/link";
import { Aboreto, Alegreya_Sans } from "next/font/google";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });
const aleg = Alegreya_Sans({ weight: "300", subsets: ["latin"] });

export default function Book() {
  return (
    <div className="h-screen w-full">
      <div className="flex h-screen w-full flex-col items-center">
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Book now</h2>
        </div>
        <div className={`${aleg.className} text-lg`}>
          <p>
            Elevate your party with mesmerizing belly dance! Dance to Arabic
            music or enjoy a captivating performance by me. Available for public
            and private events in Austin, San Antonio, Houston, Dallas, and
            surrounding areas. I bring family-friendly glamour, featuring
            dynamic Arabic music, lively entrances, and authentic props like
            veils and tambourines. Customize the experience - just let me know
            your preferences for an unforgettable event!
          </p>{" "}
          <p>
            Please inquire for more options including hiring: Duets, Group
            shows, Lesson combos, Live drummer, Full Arabic or Turkish band,
            DJs, Henna artists, Tarot readers, Snake dancers.
          </p>
          <p className="py-2 italic">
            You may reach me via email, phone, or my scheduling calendar below
          </p>
          <p className="py-2">
            telephone:{" "}
            <Link className="underline" href="tel:+15129986317">
              1 512 998 6317
            </Link>{" "}
            , can{" "}
            <Link className="underline" href="sms:+15129986317">
              {" "}
              SMS
            </Link>
          </p>
          <p>
            email:{" "}
            <Link
              className="underline"
              href="mailto:myrianbellydancing@gmail.com"
            >
              myrianbellydancing@gmail.com
            </Link>
          </p>
          <p className="py-6 text-xl underline md:pb-0 md:pt-6">
            <Link href={"/reviews"}>Client Reviews</Link>
          </p>
        </div>
        <div className="h-screen w-full">
          <CalendlyEmbed />
        </div>
        <div></div>
      </div>
    </div>
  );
}
