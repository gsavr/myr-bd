import Link from "next/link";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { alegThin, abor } from "@/assets/fonts/fonts";

export default function Book() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-full flex-col items-center ">
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Book now</h2>
        </div>
        <div className={`${alegThin.className} text-lg`}>
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
          <p className="py-6 text-xl underline md:pt-6 lg:pb-0">
            <Link href={"/reviews"}>See my Client Reviews!</Link>
          </p>
        </div>
        <div className="h-[550px] w-full lg:h-[700px]">
          <CalendlyEmbed />
        </div>
        <div></div>
      </div>
    </div>
  );
}
