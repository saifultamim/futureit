'use client'

import React, { useState } from 'react'

import { Icons } from '@/components/Icon';
import { SupportForm } from './SupportForm';
import DashboardModal from '@/components/modal/DashboardModal';

export const Timeline = ({ categories,setIsAction,isAction }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative rounded-b-3xl shadow-md min-h-[100px] md:min-h-[130px] bg-[#050506] text-white flex items-center justify-center">
                <h4 className="text-[24px] bg-[#EE3373] max-sm:text-2xl uppercase font-bold">
                    Timeline
                </h4>

                <div className="flex justify-center absolute right-0 left-0 bottom-[-20px]">
                    <button onClick={() => setIsOpen(true)} className="w-fit rounded shadow-lg md:px-14 md:py-3 px-3 py-3 max-sm:text-[10px] xl:text-[18px] text-[22px] uppercase font-bold bg-sky-400 text-white hover:bg-white hover:text-orange-500 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex items-center gap-2"><Icons.edit /> <span className='uppercase'>Create a New Post</span></button>
                </div>
            </div>
            <DashboardModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Timeline" isFooter={false} size='lg'>
            <SupportForm setIsAction={setIsAction} isAction={isAction} categories={categories} setIsOpen={setIsOpen} />
            </DashboardModal>
        </>
    )
}

Timeline.displayName = 'Timeline'
