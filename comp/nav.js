import { useState, useEffect } from "react";
import Link from "next/link";
export default function Nav() {
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
  );
}
