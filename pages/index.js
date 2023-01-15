import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [top, setTop] = useState(true);

  // sticky header
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className="bg-slate-100 min-h-screen w-screen">
      <div
        className={`border-b-4 border-opacity-40 shadow-lg border-blue-900 fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0 mr-4">
              <div className="inline-block">
                <Link href="/">
                  <span className="font-extrabold text-3xl bg-clip-text text-transparent p-4 bg-gradient-to-r from-blue-500 to-green-400">
                    OIMC
                  </span>
                </Link>
              </div>
              {/* /> */}
              {/* </svg> */}
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow">
              <ul className="flex space-x-6  flex-grow justify-end flex-wrap items-center">
                <Link href="/recent">
                  <li className="p-2 bg-blue-200 rounded-lg text-lg bg-opacity-50">
                    2022
                  </li>{" "}
                </Link>
                <Link href="/about">
                  <li className="p-2 bg-blue-200 rounded-lg text-lg bg-opacity-50">
                    About Us
                  </li>{" "}
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="md:block hidden absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="pt-48 w-screen max-w-6xl mx-auto px-12 sm:px-6">
        <div className="min-h-screen text-center pb-12 md:pb-16">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            <span className="font-extrabold">O</span>nline{" "}
            <span className="font-extrabold">I</span>nternational{" "}
            <span className="font-extrabold">M</span>ath{" "}
            <span className="font-extrabold">C</span>ompetition
          </h1>
          <p className="text-xl md:text-2xl">
            July 16th 10 AM EST to July 17th 11:59 PM EST
          </p>
          <p className="text-lg md:text-xl pt-12 md:px-48">
            We are a group of students who want to share our passion for
            mathematics with others! Register today to compete in this online
            competition for prizes and an enriching experience!
          </p>
        </div>
        <div className="-mt-12 mb-32 border-b-2 border-black"></div>

        <div className="-mt-24 pb-48">
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6">
              What we do.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              The Online International Math Competition, or OIMC, will take
              place for the first time from July 16th, 2022 to July 17th, 2022.
              This competition is run by high school students and is open for
              7th to 10th graders from around the world to compete for prizes.
              More information about our team and the competition is listed on
              other pages.
            </p>
          </div>
        </div>
        <div className="-mt-24 pb-32">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">
              Sponsors
            </h2>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src="/imgs/taskade.png" width={350} height={300} />
              <h4 className="mt-4 text-xl font-bold leading-snug  tracking-tight mb-1 pb-4">
                Taskade
              </h4>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src="/imgs/wolfram.png" width={130} height={130} />
              <h4 className="mt-4 text-xl font-bold leading-snug  tracking-tight mb-1">
                Wolfram Alpha
              </h4>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src="/imgs/AoPS.png" width={300} height={300} />
              <h4 className="mt-4 text-xl font-bold leading-snug  tracking-tight mb-1">
                Art of Problem Solving
              </h4>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src="/imgs/desmos.png" width={350} height={350} />
              <h4 className="mt-4 text-xl font-bold leading-snug  tracking-tight mb-1 pb-7">
                Desmos
              </h4>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src="/imgs/BBMC.png" width={300} height={300} />
              <h4 className="mt-4 text-xl font-bold leading-snug  tracking-tight mb-1">
                Bonnie Branch Math Circle
              </h4>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src="/imgs/daily.png" width={265} height={265} />
              <h4 className="mt-4 text-xl font-bold leading-snug  tracking-tight mb-1">
                Daily Challenge with Po-Shen Loh
              </h4>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-4 pt-8 md:pb-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">
              Partners
            </h2>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-1 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image src="/imgs/ssmo.jpg" width={350} height={300} />
              <h4 className="mt-4 text-xl font-bold leading-snug  tracking-tight mb-1 pb-4">
                SSMO
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
