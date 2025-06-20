import React from "react";

const Form = () => {
  return (
    <div>
      <div className="card h-fit" id="form">
        <h2 className="mb-4 text-2xl font-bold dark:text-white">
          Ready to Get Started?
        </h2>
        <form id="contactForm">
          <div className="sm:mb-6">
            <div className="mx-0 mb-1 sm:mb-4">
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  for="name"
                  className="pb-1 text-xs uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  name="name"
                />
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  for="email"
                  className="pb-1 text-xs uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  name="email"
                />
              </div>
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                for="textarea"
                className="pb-1 text-xs uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="textarea"
                name="textarea"
                cols="30"
                rows="2"
                placeholder="Write your message..."
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-secondary text-white px-6 py-3 font-xl rounded-md sm:mb-0"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
