import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Nav from "../comp/nav";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Nav />
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
