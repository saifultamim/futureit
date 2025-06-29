import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import footerLogo from "@/public/images/logofooter.png";
import { Icons } from "@/components/Icon";

export const HEADER_PARAMETER = {
  mobile: "01958-536790",
  email: "info.edufutureit@gmail.com",
  login: "লগইন / রেজিস্ট্রার",
};

export const NAVBAR_PARAMETER = {
  home: "হোম",
  aboutUs: "আমাদের সম্পর্কে",
  successStory: " সাফল্যের গল্প",
  contact: "যোগাযোগ",
  browseCourse: "ব্রাউজ কোর্স",
  login: "লগইন করুন",
};

export const FOOTER_ABOUT_PAGE_PARAMETER = {
  ABOUT: "about",
  MISSION_AND_VISION: "mission-and-vision",
  FACILITIES: "facilities",
  CAREER_PLAN: "career-plan",
};

export const FOOTER_DATA = {
  logoSrc: footerLogo,
  description:
    "স্মার্ট বাংলাদেশ বিনির্মাণে দক্ষতা অর্জনের মাধ্যমে নিজেকে যোগ্য করার অন্যতম ট্রেনিং ইনস্টিটিউট এডুফিউচার আইটি",

  socialLinks: [
    {
      href: "https://www.facebook.com/share/14oDwAsD4RC/",
      icon: <FaFacebookF className="text-[#00BCCF]" />,
      hoverBgColor: "hover:bg-blue-600",
    },
    {
      href: "https://www.youtube.com/@edufutureit",
      icon: <FaYoutube className="text-[#00BCCF]" />,
      hoverBgColor: "hover:bg-red-600",
    },
    {
      href: "https://www.linkedin.com/in/edufutureit",
      icon: <FaLinkedinIn className="text-[#00BCCF]" />,
      hoverBgColor: "hover:bg-[#0077B5]",
    },
    {
      href: "https://www.instagram.com/futureitinstitute",
      icon: <FaInstagram className="text-[#00BCCF]" />,
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500",
    },
    {
      href: "https://www.tiktok.com/@edufutureit",
      icon: <FaTiktok className="text-[#00BCCF]" />,
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-black hover:via-pink-500 hover:to-[#69C9D0]",
    },
  ],

  contact: {
    title: "যোগাযোগ",
    address: [
      {
        icon: "FaMapMarkerAlt",
        lines: [
          "Head Office:",
          "Rupayan Trade Centre (Level-17)",
          "Bangla Motor, Dhaka",
        ],
      },

      {
        icon: "FaMapMarkerAlt",
        lines: [
          "Uttara Branch:",
          "House - 88 (Level-3)",
          "Lake Drive Road, Sector-7, Uttara, Dhaka",
        ],
      },
    ],
  },
  popularCourses: {
    title: "জনপ্রিয় কোর্স",
    courses: [
      {
        name: "ডিজিটাল মার্কেটিং",
        url: "/course/ITM000058",
      },
      {
        name: "গ্রাফিক ডিজাইন",
        url: "/course/ITM000051",
      },
      {
        name: "স্পোকেন ইংলিশ",
        url: "/course/ITM000047",
      },
    ],
  },
  others: {
    title: "অন্যান্য",
    items: [
      {
        title: "আমাদের সম্পর্কে",
        url: `/about?content=${FOOTER_ABOUT_PAGE_PARAMETER.ABOUT}`,
      },
      {
        title: "মিশন ও ভিশন",
        url: `/about?content=${FOOTER_ABOUT_PAGE_PARAMETER.MISSION_AND_VISION}`,
      },
      {
        title: "আমাদের সুবিধাসমূহ",
        url: `/about?content=${FOOTER_ABOUT_PAGE_PARAMETER.FACILITIES}`,
      },
      {
        title: "ক্যারিয়ার প্ল্যান",
        url: `/about?content=${FOOTER_ABOUT_PAGE_PARAMETER.CAREER_PLAN}`,
      },
    ],
  },
};

export const CONTACT = {
  corporate: {
    name: "Corporate Office",
    area1: "Rupayan Trade Centre (Level-17)",
    area2: "Bangla Motor, Dhaka",
  },
  branch: {
    name: "Uttara Branch",
    area1: "House - 88 (Level-3)",
    area2: "Lake Drive Road, Sector-7, Uttara, Dhaka",
  },
  mobile: "01958536783",
  mail: "info.edufutureit@gmail.com",
};

export const dashboardMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: <Icons.dashboard size={20} />,
  },
  {
    id: "class",
    label: "Join Class",
    icon: <Icons.plus size={20} />,
    href: "/dashboard/join-class",
  },
  {
    id: "homework",
    label: "Home Work Submit",
    icon: <Icons.check size={20} />,
    href: "/dashboard/homework",
  },
  {
    id: "exams",
    label: "Exams",
    icon: <Icons.book size={20} />,
    children: [
      {
        id: "manageexams",
        label: "Manage Exam",
        href: "/dashboard/exam",
      },
      {
        id: "certificate",
        label: "Download Certificate",
        href: "/dashboard/certificate",
      },
    ],
  },
  {
    id: "supports",
    label: "Support",
    icon: <Icons.user size={20} />,
    children: [
      {
        id: "notice",
        label: "Notices",
        href: "/dashboard/notice",
      },
      {
        id: "material",
        label: "Study Material",
        href: "/dashboard/study-material",
      },
      {
        id: "marketplace",
        label: "Marketplace Video",
        href: "/dashboard/marketplace-video",
      },
    ],
  },
  {
    id: "livesupport",
    label: "Live support",
    icon: <Icons.radio size={20} />,
    href: "/dashboard/support",
  },
];

export const SUPPORT_POST_STUDENT = "stu";
export const SUPPORT_POST_TEACHER = "tea";
export const SUPPORT_POST_ADMIN = "adm";

export const POST_STATUS = {
  SOLVED: "Solved",
  APPROVED: "Approved",
  PENDING: "Pending",
  MY_POST: "My Post",
};



export const TAB_CONFIG = [
  {
    type: "Regular",
    label: "Regular Exams",
    emptyMessage: "No regular exams available at the moment.",
  },
  {
    type: "Reexam",
    label: "Re-Exams",
    emptyMessage: "No re-exams scheduled currently.",
  },
] ;