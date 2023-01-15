import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Analytics from "@vercel/analytics";
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
            About Us
          </h1>
          <p className="text-xl md:text-2xl">
            The OIMC committee is a group of students who have a passion for
            writing and solving math problems. We wanted to share our passion
            with other students by making this math competition.
          </p>
          <p className="text-2xl bg-opacity-40 bg-blue-200 p-4 rounded-lg mt-12 md:px-48">
            <b>Founder</b>: Aidan Lee <br />
            <br />
            <b>Lead Problem Writer</b>: Tanishq Pauskaur <br />
            <br /> <b>Problem Writers</b>: Aidan Lee, Jiahe Liu, Allan Yuan,
            Ryan Shin, Preston Hu, Eric Zhan, and Tanishq Pauskaur <br />
            <br />
            <b>Testsolvers</b>: Angie Huang and Aiden Wen <br /> <br />
            <b>Webmaster</b>: Ryan Chou
          </p>
        </div>
      </div>
      <Analytics />
    </div>
  );
}
