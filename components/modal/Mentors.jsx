

const MentorsModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


  }
  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="fixed inset-0 bg-black text-gray-600 bg-opacity-80 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg lg:w-2/4">
          <h2 className="text-2xl font-bold mb-4">Trainer Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded  text-base"
                // value={name}
                placeholder="John"
          
              />
              
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded  text-base"
                // value={mobile}
                placeholder="018*******"
               
              />
             
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                // value={email}
                placeholder="example@gmail.com"
               
                className="w-full p-2 border border-gray-300 rounded text-base"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Present Address
              </label>
              <textarea
                defaultValue=''
              
                className="w-full p-2 border border-gray-300 rounded text-base"
              ></textarea>
            </div>
            <div className="mb-4">
              <strong className="text-blue-600">Send your cv: </strong>
              <label className="text-sm font-medium text-gray-600">
                info.edufutureit@gmail.com
              </label>
            </div>
            <div className="flex items-center space-x-5">
              <button
                type="submit"
                className="leading-[32px] px-8 flex items-center justify-center bg-[#EE3373] rounded-xl text-white font-medium text-sm"
              >
                Submit
              </button>
              <button
                onClick={handleClose}
                type="button"
                className="leading-[32px] px-8 flex items-center justify-center bg-red-400 rounded-xl text-white font-medium text-sm"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorsModal;
