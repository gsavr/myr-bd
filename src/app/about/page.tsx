import Image from "next/image";
import Link from "next/link";
import { Aboreto } from "next/font/google";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        {/* header */}
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>About Me</h2>
        </div>
        {/* header pic */}
        <div>
          <Image
            className="rounded shadow-md "
            src="/myr2.webp"
            alt="fire dancing"
            width={550}
            height={100}
          />
        </div>
        {/* about me section */}
        <div className="p-4 text-xl">
          <p>
            Born and raised in Andalusia, Spain, I{"'"}ve been dancing
            professionally for over 15 years. Winner of the famous Miss
            Bellydance Spain contest in 2008.
          </p>
          <br />
          <p>
            My journey in the dance world began with flamenco, and later I moved
            to Paris, France, to complete my studies. There, I explored various
            styles such as Bollywood, African, Hip hop, Salsa, and bellydancing.
            When I discovered bellydancing, I found my true passion.
          </p>
          <br />
          <p>
            Continuing my dance education in Spain, Morocco, and Egypt, I
            trained with master teachers like Jillina, Dina, Amir Thaleb,
            Soraia, Sadie, Zuel, Aida, Devorah Korek, Mohammed El Sayed...
          </p>
          <br />
          <p>
            With expertise in a wide array of styles, from Egyptian Raqs Sharqi,
            Turkish, American Cabaret, Folkloric to Theatrical Fusion, I have
            also incorporated fire dance, flow arts, and Lebanon and Syrian
            Dabke.
          </p>
          <br />
          <p>
            Bellydance is my greatest passion in life, and I strive to showcase
            it in my lively and interactive performances. Hypnotizing, charming,
            and ready to kickstart the party, I am a dynamic bellydancer with a
            special passion for wings, veil, fan veil, candle tray, sword, and
            finger cymbals.
          </p>
          <br />
          <p>
            Simply ask, and the show will be tailored to your dream party. Your
            guests are guaranteed to have an amazing time filled with fun.
            Audience interaction is the highlight of the show — an enchanting
            bellydance performance and an unforgettable event by Myrian.
          </p>
        </div>
        <div className="text-center text-2xl hover:underline">
          <Link href={"/book"}>Book Today!</Link>
        </div>
      </div>{" "}
      <div></div>
    </div>
  );
}
