export default function CourseSearch() {
  return (
    <div className="relative w-full  max-w-lg mx-auto hidden lg:block ">
      <input
        type="text"
        placeholder="আপনি কি শিখতে চান"
        className="border border-gray-400 h-full font-siliguri w-full px-3 py-2 rounded-lg focus:outline-none text-sm text-gray-600"
      />
    </div>
  );
}
