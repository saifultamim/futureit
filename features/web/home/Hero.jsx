"use client";
import Button from "@/components/ui/Butotn";
import Image from "next/image";
import React from "react";
import heroImage from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div className="flex items-end h-screen w-11/12 mx-auto border-2 border-blue-600">
      {/* left side */}
      <div className="w-full">
        <h1 className="text-6xl font-siliguri">
          পূরণ করতে লক্ষ্য
          <br />
          <span className="text-secondary text-8xl font-semibold">
            হতে হবে দক্ষ
          </span>
        </h1>
        <p className="font-siliguri">
          স্কিল ডেভেলপমেন্ট করবো - দক্ষতার মাধ্যমে সমৃদ্ধ হবো
        </p>
        <Button className="bg-secondary font-siliguri text-xl">
          আরো দেখুন
        </Button>
      </div>
      <div className="border border-green-600 w-full">
        <Image src={heroImage} alt="hero image" className="" />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
