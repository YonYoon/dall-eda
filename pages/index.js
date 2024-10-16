import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[512px] mx-auto p-10 bg-white rounded-lg">
      <Head>
        <title>DALL•EDA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-center text-7xl pb-3">DALL•EDA</h1>
      <p className="pb-5 text-lg">
        Meet your AI photo editor, a magic wand that will change your photos forever! Unleash the magic, let your imagination run wild!
      </p>

      <Link href="/paint">
        <video autoPlay loop muted playsInline clasName="w-full cursor-pointer">
          <source src="/cherries-oranges-bananas.mp4" />
        </video>
      </Link>

      <Link href="/paint">
        <a className="py-3 block text-center bg-black text-white rounded-md mt-10">
          Start!
        </a>
      </Link>
      <p className="text-center text-gray-500 text-sm mt-6">Created by Zhansen Zhalel</p>
    </div>
  );
}
