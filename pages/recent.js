import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import Nav from "../comp/nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Nav />

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
