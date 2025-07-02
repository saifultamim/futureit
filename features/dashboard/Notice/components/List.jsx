import ExpandableNoticeRow from "./ExpandableRow";

const NoticeList = ({ notices }) => {
  return (
 <div className='lg:overflow-hidden md:overflow-x-auto'>
     <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-50 border-b">
          <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
            Date
          </th>
          <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
            Course
          </th>
          <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
            Batch
          </th>
          <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">
            Notice
          </th>
        </tr>
      </thead>
      <tbody>
        {notices?.map((notice) => (
          <ExpandableNoticeRow key={notice.xsl} notice={notice} />
        ))}
      </tbody>
    </table>
 </div>
  );
};

export default NoticeList;
