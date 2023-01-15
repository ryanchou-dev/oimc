import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics";

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
    <div className="bg-slate-100 min-h-screen">
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

              {/* fillRule="nonzero" */}
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

      <div className="pt-48 max-w-6xl mx-auto px-12 sm:px-6">
        <div className="min-h-screen text-center md:pb-16">
          <h1
            className="text-6xl md:text-7xl font-bold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            OIMC 2022
          </h1>
          <p className="text-xl md:text-2xl">
            Happened on July 16th to July 17th 2022
          </p>
          <p className="text-lg md:text-xl pt-12 md:px-48">
            <a
              className="bg-slate-400 p-2 rounded-lg bg-opacity-30 mb-2"
              target={"_blank"}
              rel="noreferrer"
              href="https://docs.google.com/spreadsheets/d/1C3-b4t4VsIMcAms9uJuiPdYaKxAYWIOWdGSBbkB2n3Y/edit?usp=sharing"
            >
              High School Leaderboard
            </a>{" "}
            <br />
            <br />
            <a
              className="bg-slate-400 p-2 rounded-lg bg-opacity-30 mb-2"
              target={"_blank"}
              rel="noreferrer"
              href="https://docs.google.com/spreadsheets/d/1I62CZuPsrERGIdvlJpEgB7whVkZ5joIALfdLOdXyErM/edit?usp=sharing"
            >
              Middle School Leaderboard
            </a>{" "}
          </p>
        </div>
      </div>
      <Analytics />
    </div>
  );
}
