import Link from "next/link";

const Breadcrumb = ({ links }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full mb-4 px-2 py-2 bg-gray-50 border border-gray-200 rounded-lg"
    >
      <ol className="flex flex-wrap items-center text-sm lg:text-base font-medium text-gray-700 space-x-1 lg:space-x-2 overflow-hidden">
        {links?.map((link, index) => (
          <li key={index} className="flex items-center truncate max-w-xs">
            <Link
              href={link?.href}
              className={` ${
                index === links.length - 1
                  ? "text-gray-400 cursor-default"
                  : "text-[#EE2C73] hover:underline"
              }`}
            >
              {link?.label}
            </Link>

            {index < links.length - 1 && (
              <svg
                className="w-4 h-4 mx-1 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

const Breadcrumbs = ({ courseName, lessonName }) => {
  const links = [
    { href: "/stuportal/recorded-video", label: "My Courses" },
    { href: "#", label: courseName || "Course" },
    { href: "#", label: lessonName || "Lesson" },
  ];

  return <Breadcrumb links={links} />;
};

export default Breadcrumbs;
