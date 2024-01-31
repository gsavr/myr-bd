import Link from "next/link";
import Image from "next/image";
import fb from "../assets/images/fb.webp";
import ig from "../assets/images/ig.webp";
import tiktok from "../assets/images/tt.webp";
import youtube from "../assets/images/yt.webp";
import whatsapp from "../assets/images/wa.webp";
import { IconChatbox, IconEmail, IconTelephone } from "../components/SvgIcons";

export function Footer() {
  return (
    <footer className="bg-slate-200/60 text-[#4d5153] md:sticky md:top-[100vh]  dark:bg-slate-800/60 dark:text-[#b3bdc2]">
      <div className="container relative mx-auto px-5 pb-5 pt-0 md:px-0 lg:px-5">
        {/*  Flex container for all items  */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12  md:flex-row-reverse md:space-y-0">
          {/* Registered */}
          <div className=" mt-5 text-sm md:w-1/3 md:text-center md:text-base">
            <div className="flex space-x-3">
              <span className="w-full">2024, Myrian Bellydancing &#174;</span>
            </div>
          </div>
          {/*  Social  */}
          <div className="!mt-5 flex items-center space-x-8 px-0 pb-4 md:w-1/3 md:space-x-5 md:pb-0 lg:space-x-8">
            <div>
              <Link
                href="https://www.instagram.com/tripsandlips/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={ig} alt="Instagram" className="h-[35px] w-[35px]" />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.facebook.com/miryam.sanchezroldan"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={fb} alt="facebook" className="h-[35px] w-[35px]" />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.youtube.com/@MyrianSanchez-jz1he"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={youtube}
                  alt="YouTube"
                  className="h-[35px] w-[35px]"
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.tiktok.com/@bellymyrian?_t=8jCD379pRDr&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={tiktok}
                  alt="TikTok"
                  className="h-[35px] w-[35px]"
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://wa.me/15129986317"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={whatsapp}
                  alt="WhatsApp"
                  className="h-[35px] w-[35px]"
                />
              </Link>
            </div>
          </div>
          {/* Contact */}
          <div className="-pt-3 mt-5 flex flex-col items-center pb-5 text-lg md:w-1/3 md:items-start md:pt-10 md:text-base lg:text-lg">
            <div className="flex items-center space-x-3">
              <Link href="tel:+15129986317" className="flex items-center">
                <IconTelephone /> <span className="pl-1">+1 512 998 6317</span>
              </Link>{" "}
              <Link className="pt-0" href="sms:+15129986317">
                {" "}
                <IconChatbox />
              </Link>
            </div>
            <div className="flex space-x-3">
              <Link
                href="mailto:myrianbellydancing@gmail.com"
                className="flex items-center"
              >
                <IconEmail />{" "}
                <span className="pl-1"> myrianbellydancing@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
        {/* copy */}
        <p className="pt-2 text-center text-xs md:pt-0">
          &copy; Giorgio Savron Development
        </p>
      </div>
    </footer>
  );
}
