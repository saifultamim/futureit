const AssignBatchList = ({ assignBatches }) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-50 border-b">
          <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
            Batch
          </th>
          <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
            Course Name
          </th>
        </tr>
      </thead>
      <tbody>
        {assignBatches?.map((assignBatch, index) => (
          <tr
            key={index}
            className="border-b last:border-b-0 hover:bg-gray-50 transition"
          >
            <td className="px-6 py-4 text-sm text-gray-700 font-medium">
              {assignBatch?.batch?.xbatchname}
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">
              {assignBatch?.seitem?.xdesc}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssignBatchList;
