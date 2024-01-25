import fb from "../assets/images/fb.webp";
import ig from "../assets/images/ig.webp";
import tiktok from "../assets/images/tt.webp";
import youtube from "../assets/images/yt.webp";
import whatsapp from "../assets/images/wa.webp";
import Image from "next/image";
import { IconEmail, IconTelephone } from "@/components/Svg-icons";

export function Footer() {
  return (
    <footer className="bg-slate-200/60 text-[#4d5153] md:sticky md:top-[100vh]  dark:bg-slate-800/60 dark:text-[#b3bdc2]">
      <div className="container relative mx-auto px-5 pb-5 pt-0 md:px-0 lg:px-5">
        {/*  Flex container for all items  */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-row-reverse md:space-y-0">
          {/* Copy */}
          <div className="text mt-5 text-sm md:text-base">
            <div className="flex space-x-3">
              <span>&copy; 2024 Myrian Bellydancing</span>
            </div>
          </div>
          {/*  Social  */}
          <div className="!mt-5 flex items-center space-x-8 px-0 pb-4 md:pb-0">
            <div>
              <a
                href="https://www.instagram.com/tripsandlips/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={ig} alt="Instagram" className="h-[35px] w-[35px]" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/miryam.sanchezroldan"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={fb} alt="facebook" className="h-[35px] w-[35px]" />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/@MyrianSanchez-jz1he"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={youtube}
                  alt="YouTube"
                  className="h-[35px] w-[35px]"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@bellymyrian?_t=8jCD379pRDr&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={tiktok}
                  alt="TikTok"
                  className="h-[35px] w-[35px]"
                />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/15129986317"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={whatsapp}
                  alt="WhatsApp"
                  className="h-[35px] w-[35px]"
                />
              </a>
            </div>
          </div>
          {/* Contact */}
          <div className="-pt-3 mt-5 flex flex-col items-center pb-5 text-lg md:items-start md:pt-10 md:text-base lg:text-lg">
            <div className="flex space-x-3">
              <a href="tel:15129986317" className="flex items-center">
                <IconTelephone /> <span className="pl-1">+1 512 998 6317</span>
              </a>
            </div>
            <div className="flex space-x-3">
              <a
                href="mailto:myrianbellydancing@gmail.com"
                className="flex items-center"
              >
                <IconEmail />{" "}
                <span className="pl-1"> myrianbellydancing@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
