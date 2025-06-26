"use client";



import React, { useState } from "react";
import { BsBroadcast } from "react-icons/bs";





export const StartSupport = ({ getLinks }) => {

    const [loading, setLoading] = useState(false);


    const handleLink = async () => {
     
    };

    const renderButtonForLinks = (_links) => {

        if (_links?.xstatus == "Live") {
            return (
                <div className='absolute bottom-[-20px] left-0 right-0 z-10'>
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={handleLink}
                            disabled={loading}
                            className='w-fit rounded-md shadow hover:shadow-md px-5 py-3 max-sm:text-[18px] xl:text-[20px] text-[25px] uppercase font-bold bg-red-600 text-white'>
                            Start Live Support {loading ? "..." : null}
                        </button>
                    </div>
                </div>
            );
        } return (
            <div className='absolute bottom-[-20px] left-0 right-0 z-10'>
                <div className='flex justify-center items-center'>
                    <h4 className='w-fit rounded-md shadow-sm hover:shadow-md px-5 py-3 max-sm:text-[18px] xl:text-[20px] text-[25px] uppercase font-bold bg-red-400/95 text-white border border-red-500'>
                        Live Support
                    </h4>
                </div>
            </div>
        );
    };




    return (
        <div className='relative rounded-b-3xl  min-h-[200px] bg-red-50 border border-red-200/85 rounded-md shadow text-black flex items-center justify-center '>
            <div className='p-16 mt-10'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='mb-2'>

                        <BsBroadcast className='xl:text-[40px] max-sm:text-[35px] text-green-500' />
                    </div>
                    <h4 className='text-[30px] max-sm:text-2xl uppercase font-bold'>
                        Live Support
                    </h4>
                    <h4 className='text-xl mt-2'>
                        {getLinks?.eduteacher?.xteachername}
                    </h4>
                </div>
                {renderButtonForLinks(getLinks)}
            </div>
        </div>
    );
};

StartSupport.displayName = 'StartSupport'
