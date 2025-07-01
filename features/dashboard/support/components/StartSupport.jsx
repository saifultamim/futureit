"use client";

import React, { useState } from "react";
import { BsBroadcast } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";

export const StartSupport = ({ getLinks }) => {
  const [loading, setLoading] = useState(false);

  const handleLink = async () => {};

  const renderButtonForLinks = (_links) => {
    if (_links?.xstatus == "Live") {
      return (
        <div className="absolute bottom-[-20px] left-0 right-0 z-10">
          <div className="flex justify-center items-center">
            <button
              onClick={handleLink}
              disabled={loading}
              className="w-fit rounded-md shadow hover:shadow-md px-5 py-3 max-sm:text-[18px] xl:text-[20px] text-[25px] uppercase font-bold bg-red-600 text-white"
            >
              Start Live Support {loading ? "..." : null}
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="absolute bottom-[-20px] left-0 right-0 z-10">
        <div className="flex justify-center items-center">
          <h4 className="w-fit rounded-md shadow-sm hover:shadow-md px-5 py-3 max-sm:text-[18px] xl:text-[20px] text-[25px] uppercase font-bold bg-red-400/95 text-white border border-red-500">
            Live Support
          </h4>
        </div>
      </div>
    );
  };

  return (
    <div className="relative rounded-b-3xl shadow-md min-h-[160px] md:min-h-[200px] bg-[#050506] text-white flex items-center justify-center">
      <div>
        <div className="flex justify-center items-center flex-col">
          <div className="mb-2">
            <BsBroadcast className="md:text-[40px] max-sm:text-[35px]" />
          </div>
          <h4 className="text-[30px] bg-[#EE3373] max-sm:text-2xl uppercase font-bold">
            Live Support
          </h4>
          {getLinks?.xsl && getLinks?.eduteacher?.xteachername && (
            <p className="text-xs text-gray-200 md:text-base uppercase font-hindSliguri font-bold mt-1">
              {getLinks?.eduteacher?.xteachername}
            </p>
          )}
        </div>

        <div className="absolute bottom-[-20px] left-0 right-0 z-10">
          <div className="flex flex-row justify-center items-center gap-4">
            {getLinks?.xsl ? (
              <button
                onClick={handleLink}
                disabled={loading}
                className="w-fit rounded shadow-lg md:px-14 md:py-3 px-3 py-3 max-sm:text-[10px] xl:text-[18px] text-[22px] uppercase font-bold bg-fuchsia-500 text-white hover:bg-white hover:text-orange-500 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              >
                <FaHeadset />
                {loading ? "Joining" : "Join Live Support"}
              </button>
            ) : (
              <button
                disabled
                className="w-fit rounded shadow-lg md:px-14 md:py-3 px-3 py-3 max-sm:text-[10px] xl:text-[18px] text-[22px] uppercase font-bold bg-gray-500 text-white cursor-not-allowed flex items-center gap-2"
              >
                <FaHeadset />
                Live Support Session
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

StartSupport.displayName = "StartSupport";
