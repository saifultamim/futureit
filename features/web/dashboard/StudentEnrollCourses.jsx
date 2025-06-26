

const ActiveCourseList = ({ courses }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
              Invoice No
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
              Course Name
            </th>
          </tr>
        </thead>
        <tbody>
          {courses?.map((course, index) => (
            <tr
              key={index}
              className="border-b last:border-b-0 hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                {course.xsellsdtid}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {course.xitemdesc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveCourseList;
