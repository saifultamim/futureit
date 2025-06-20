import { FOOTER_DATA } from "@/utils/data/constant";
import Link from "next/link";

const SocialIcons = ({ size = "w-8 h-8", bgColor = "bg-[#00BCCF]" }) => {
  return (
    <div className="flex items-center space-x-4">
      {FOOTER_DATA?.socialLinks.map(({ href, icon, hoverBgColor }) => (
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
