import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const socialLinks = [
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
];

const SocialIcons = ({ size = "w-8 h-8", bgColor = "bg-[#00BCCF]" }) => {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map(({ href, icon, hoverBgColor }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          className={`group ${size} ${bgColor} rounded-full flex items-center justify-center transition-colors duration-300 ${hoverBgColor}`}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
