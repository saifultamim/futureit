import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import footerLogo from "@/public/images/logofooter.png";

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
