import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <div className="container lg:px-10 md:px-2 px-1 py-10   w-11/12 mx-auto font-siliguri">
        <div className="grid md:grid-cols-2">
          <div className="h-full pr-6">
            <ul className="mb-6 md:mb-0">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4 flex flex-col space-y-4">
                  <div>
                    <p className="font-bold">Corporate Office:</p>
                    <p className="text-gray-600 ">
                      Rupayan Trade Centre (Level-17)
                    </p>
                    <p className="text-gray-600 ">Bangla Motor, Dhaka</p>
                  </div>
                  <div>
                    <p className="font-bold">Uttara Branch:</p>
                    <p className="text-gray-600 ">House - 88 (Level-3)</p>
                    <p className="text-gray-600 ">
                      Lake Drive Road, Sector-7, Uttara, Dhaka
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Contact
                  </h3>
                  <p className="text-gray-600 ">Mobile: 01958536783</p>
                  <p className="text-gray-600 ">
                    Mail: info.edufutureit@gmail.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
