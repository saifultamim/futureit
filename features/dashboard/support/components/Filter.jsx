'use client'

import React from 'react';


import clsx from 'clsx';
import { POST_STATUS } from '@/utils/data/constant';



export const Filter = ({ filter, setFilter, counts }) => {
  const renderSanitizeFilterWithCount = (_counts= []) => {
    return [
      { label: 'All', count: _counts[0]?.total_count, color: 'bg-blue-400' },
      { label: POST_STATUS.PENDING, count: _counts[0]?.user_pending_count, color: 'bg-yellow-400' },
      { label: POST_STATUS.SOLVED, count: _counts[0]?.total_solved_count, color: 'bg-green-400' },
      { label: POST_STATUS.APPROVED, count: _counts[0]?.user_approved_count, color: 'bg-purple-400' },
      { label: POST_STATUS.MY_POST, count: _counts[0]?.user_post_count, color: 'bg-red-400' },
    ];
  };

  return (
    <main className='flex items-center justify-center mt-12'>

    <div className="flex gap-4 max-sm:gap-2 max-sm:flex-wrap">
      {renderSanitizeFilterWithCount(counts).map((item) => (
          <button
          key={item.label}
          onClick={() => setFilter(item.label)}
          className={clsx(
              'border border-gray-300 rounded-md px-3 py-1 text-white font-medium transition-all ease-in-out duration-500 text-sm max-sm:text-xs max-sm:px-2 max-sm:py-0.5',
              item.color,
              filter === item.label ? 'scale-110 ring-2 ring-offset-2 max-sm:scale-105' : 'opacity-80 hover:opacity-100'
            )}
            >
          <span className="mr-2 max-sm:text-xs max-sm:mr-1">{item.label}</span>
          <span className='max-sm:text-xs'>({item.count ?? 0})sssss</span>
        </button>

      ))}
    </div>
      </main>
  );
};

Filter.displayName = 'Filter';