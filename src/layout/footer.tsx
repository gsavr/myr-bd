import Link from "next/link";
import Image from "next/image";
import fb from "../assets/images/fb.webp";
import ig from "../assets/images/ig.webp";
import tiktok from "../assets/images/tt.webp";
import youtube from "../assets/images/yt.webp";
import whatsapp from "../assets/images/wa.webp";
import myr from "@/assets/images/myr.png";
import { IconChatbox, IconEmail, IconTelephone } from "../components/SvgIcons";

const socials = [
  {
    href: "https://www.instagram.com/tripsandlips/",
    src: ig,
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/miryam.sanchezroldan",
    src: fb,
    alt: "facebook",
  },
  {
    href: "https://www.youtube.com/@MyrianSanchez-jz1he",
    src: youtube,
    alt: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@bellymyrian?_t=8jCD379pRDr&_r=1",
    src: tiktok,
    alt: "TikTok",
  },
  {
    href: "https://wa.me/15129986317",
    src: whatsapp,
    alt: "WhatsApp",
  },
];

export function Footer() {
  return (
    <footer className="flex w-full flex-col justify-stretch bg-slate-200/60 pb-3 text-center text-[#4d5153] md:sticky md:top-[100vh] dark:bg-slate-800/60 dark:text-[#b3bdc2]">
      {/*  Flex container for all items  */}
      <div className="container mx-auto flex w-full flex-col-reverse items-center justify-stretch space-y-12 pb-5  md:flex-row-reverse md:space-y-0">
        {/* Registered */}
        <div className="mt-5 flex justify-center text-sm md:w-4/12 md:text-center md:text-base">
          <div className="flex space-x-3">
            <Link href={"/"} className="flex items-center md:pl-3 lg:pl-0">
              <Image src={myr} alt="logo" width={30}></Image>

              <span className="w-full pl-1">
                2024, Myrian Bellydancing &#174;
              </span>
            </Link>
          </div>
        </div>
        {/*  Socials  */}
        <div className="!mt-5 flex items-center justify-center space-x-8 pb-4 text-center md:w-4/12 md:space-x-5 md:pb-0 lg:space-x-8">
          {socials.map(({ href, src, alt }) => {
            return (
              <div key={href}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={alt}
                >
                  <Image src={src} alt={alt} className="h-[35px] w-[35px]" />
                </Link>
              </div>
            );
          })}
        </div>
        {/* Contact */}
        <div className="-pt-3 mt-5 flex flex-col items-center justify-center pb-5 text-lg md:w-4/12  md:pt-10 md:text-base lg:text-lg">
          <div className="flex flex-col md:items-start">
            <div className="flex items-center justify-center space-x-3">
              <Link
                href="tel:+15129986317"
                className="flex items-center"
                aria-label="call telephone"
              >
                <IconTelephone /> <span className="pl-1">+1 512 998 6317</span>
              </Link>{" "}
              <Link
                className="pt-0"
                href="sms:+15129986317"
                aria-label="send text message"
              >
                {" "}
                <IconChatbox />
              </Link>
            </div>
            <div className="flex space-x-3">
              <Link
                href="mailto:myrianbellydancing@gmail.com"
                className="flex items-center"
                aria-label="send email"
              >
                <IconEmail />{" "}
                <span className="pl-1"> myrianbellydancing@gmail.com</span>
              </Link>
            </div>
            <span className="pt-1 text-sm">
              Serving Austin, San Antonio, Houston, Dallas
            </span>
          </div>
        </div>
      </div>

      {/* copy */}
      <Link
        href={"https://www.giorgiosavron.com"}
        aria-label="Developer Website"
      >
        <p className="pt-2 text-center text-xs md:pt-0">
          &copy; Giorgio Savron Development
        </p>
      </Link>
    </footer>
  );
}
