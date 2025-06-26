'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';


export const SupportLogs = ({ logs }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [commentInfo, setCommentInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 5; // Number of logs per page

  // Calculate total pages
  const totalPages = Math.ceil(logs?.length / logsPerPage);

  // Get current logs based on the current page
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = logs?.slice(indexOfFirstLog, indexOfLastLog);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onOpen = () => setModalOpen(true);

  const onClose = () => setModalOpen(false);

  return (
    <div className='mt-12'>
      <h4 className="text-center text-xl uppercase font-bold py-3">
        Support Logs
      </h4>
      <div className="overflow-x-auto xl:w-full mt-4">
        <table className=" min-w-full bg-red-50 border border-red-200/85 rounded-md shadow">
          <thead>
            <tr className="bg-red-200 text-gray-700 uppercase text-xs">

              <th className="px-3 py-4 text-left">#</th>
              <th className="px-3 py-4 text-left">Topic</th>
              <th className="px-3 py-4 text-left">Time</th>
              <th className="px-3 py-4 text-left">Comment</th>
              <th className="px-3 py-4 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {currentLogs?.map((item, index) => (
              <tr key={index} className="text-gray-600 text-sm border-b">
                <td className="px-3 py-2 max-sm:text-[10px]">{indexOfFirstLog + index + 1}</td>
                <td className="px-3 py-2 break-all max-sm:text-[10px]">{item?.xtopic?.slice(0, 20)}</td>
                <td className="px-3 py-2 max-sm:text-[10px]">
                  <div className='flex items-center gap-2'>
                    <span className='max-sm:text-[10px] xl:text-[12px]'>
                      {new Date(item?.ztime)?.toLocaleTimeString(
                        'en-US',
                        {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true
                        }
                      )}</span>
                    <span className='max-sm:text-[10px] xl:text-[12px]'>
                      {
                        new Date(item?.ztime).toLocaleDateString()
                      }
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2 max-sm:text-[10px]">{item?.xcomment?.slice(0, 20) || '-'}</td>
                <td className="px-3 py-2">
                  {
                    item?.xcomment?.length > 0 ? null : <button onClick={() => {
                      setCommentInfo(item);
                      onOpen();
                    }} className="text-red-700  bg-red-200 hover:bg-red-300 max-sm:px-1 px-2 py-[1px] rounded max-sm:text-[8px] text-[10px] text-nowrap">Give Review</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-4">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 text-[12px] py-1 text-red-700 bg-red-200 hover:bg-red-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Previous
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)]?.map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 text-[12px] py-1 text-red-700 ${currentPage === i + 1 ? 'bg-red-300' : 'bg-red-200'
              } hover:bg-red-300 rounded`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 text-[12px] py-1 text-red-700 bg-red-200 hover:bg-red-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Next
        </button>
      </div>

      {
        modalOpen && <Modal isOpen={modalOpen} onClose={onClose} commentInfo={commentInfo} />
      }
    </div>

  );
};


const Modal = ({ isOpen, onClose, commentInfo }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formdata, setFormdata] = useState({
    xcomment: "",
  });
  const { showAlert } = useAlert();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {

      if (!formdata?.xcomment || formdata?.xcomment?.length < 1 || formdata?.xcomment?.trim() === '') {
        // setError("Write Review First");
        return showAlert("error", "Write Review First");
      }
      // Handle form submission

      const data = await createSupportReview({
        xcomment: formdata?.xcomment,
        xsl: commentInfo?.xsl,
        userId: commentInfo?.xstudent
      })

      if (data?.error) {
        setError(data?.error);
      }

      showAlert("success", "Review Added Successfully");
      onClose();
      setFormdata({
        xcomment: "",
      });


      router.refresh();

    } catch (error) {
      // setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (commentInfo) {
      setFormdata({
        xcomment: commentInfo?.xcomment,
      });
    }
  }, [commentInfo]);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-opacity-50 bg-gray-900 px-3">
          <div className="relative w-full lg:w-2/6 mx-auto bg-white  rounded-lg shadow-lg">
            <div className="relative rounded-lg">
              <button
                className="absolute -top-5 -right-2 p-2 text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:bg-red-700"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="overflow-hidden rounded-lg">
                <p className="text-lg font-bold text-center py2-3">Review</p>
                <div className="p-4">
                  <h4 className="text-gray-700 text-center text-sm font-semibold py-2">
                    Topic: <span className='text-gray-600 font-normal'>{commentInfo?.xtopic}</span>
                  </h4>
                  {error && <p className="text-red-500 text-center text-xs">{error}</p>}
                  <textarea className='p-2 border w-full' value={formdata?.xcomment} onChange={(e) => setFormdata({ ...formdata, xcomment: e.target.value })} name="" id="" cols={20} rows={5}></textarea>
                  <div className='mt-3 flex justify-end'>
                    <button disabled={loading} onClick={handleSubmit} className="text-green-700  bg-green-200 hover:bg-green-300 px-4 py-1 rounded text-[14px]">
                      {loading ? 'Submitting' : 'Submit'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



SupportLogs.displayName = 'SupportLogs'
