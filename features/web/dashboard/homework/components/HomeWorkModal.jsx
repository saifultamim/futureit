import DashboardModal from "@/components/modal/DashboardModal";

const HomeworkModal = ({
  isModalOpen,
  closeModal,
  selectedHomework,
  errors,
  handleSubmit,
}) => (

  <DashboardModal isOpen={isModalOpen} onClose={closeModal} title="Upload Homework">
    {errors?.general && (
      <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
        {errors.general}
      </p>
    )}

    <form className="space-y-4" action={handleSubmit}>
      <input type="hidden" name="xquesid" value={selectedHomework.xquesid} />
      {selectedHomework.homework_submit?.[0]?.xsl && (
        <input
          type="hidden"
          name="submissionId"
          value={selectedHomework.homework_submit[0].xsl}
        />
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description <span className="text-red-500 ">*</span>
        </label>
        <textarea
          rows={4}
          name="xdescription"
          className={`w-full px-3 py-2 mt-1 text-sm border rounded-lg ${
            errors?.description ? "border-red-500" : "border-gray-300"
          }`}
          defaultValue={
            selectedHomework.homework_submit?.[0]?.xdescription || ""
          }
        />
        {errors?.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description[0]}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Drive Link
        </label>
        <input
          type="link"
          name="xfile_name"
          defaultValue={selectedHomework.homework_submit?.[0]?.xfile_name || ""}
          placeholder="e.g., https://drive.google.com/file/d/FILE_ID/view"
          className="w-full px-3 py-2 mt-1 text-sm border rounded-lg"
        />
        {errors?.xfile_name && (
          <p className="mt-1 text-sm text-red-600">{errors.xfile_name[0]}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {selectedHomework.homework_submit?.[0]?.xsl ? "Update" : "Submit"}{" "}
          Homework
        </button>
      </div>
    </form>
  </DashboardModal>
);

export default HomeworkModal;