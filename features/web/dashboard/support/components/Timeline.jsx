'use client'

import React, { useState } from 'react'

import { Icons } from '@/components/Icon';
import { SupportForm } from './SupportForm';
import DashboardModal from '@/components/modal/DashboardModal';

export const Timeline = ({ categories,setIsAction,isAction }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="py-10 px-6 w-full bg-red-50 border border-red-200/85 rounded-md shadow max-sm:mt-10 xl:mt-7 flex justify-center items-center max-sm:gap-4 xl:gap-10 relative">
                <h4 className="text-black font-extrabold xl:text-2xl  uppercase text-center">
                    Timeliness
                </h4>

                <div className="flex justify-center absolute right-0 left-0 bottom-[-20px]">
                    <button onClick={() => setIsOpen(true)} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md  flex items-center gap-2"><Icons.edit /> <span className='uppercase'>Create a New Post</span></button>
                </div>
            </div>
            <DashboardModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Timeline" isFooter={false} size='lg'>
            <SupportForm setIsAction={setIsAction} isAction={isAction} categories={categories} setIsOpen={setIsOpen} />
            </DashboardModal>
        </>
    )
}

Timeline.displayName = 'Timeline'
