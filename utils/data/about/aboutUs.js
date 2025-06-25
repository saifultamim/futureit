import {
  FaLightbulb,
  FaBullseye,
  FaHandHoldingHeart,
  FaStar,
  FaUsers,
  FaBookOpen,
  FaUserCheck,
} from "react-icons/fa";
export const aboutUs = {
  title: " About Us",
  desc: "Edufuture is a dynamic and future-oriented training institute committed to excellence in IT and language education. We provide career-focused courses designed for students, job seekers, entrepreneurs, and working professionals. Through innovative teaching and real-world applications, we help individuals transform their dreams into achievements.",
};
export const mission = {
  title: "Mission",
  desc: "To deliver cutting-edge, accessible, and industry-relevant education in IT and language that enhances professional capabilities and unlocks lifelong opportunities.",
  icon: (
    <FaBullseye className="text-6xl text-blue-500 mb-3 mx-auto animate-pulse" />
  ),
};

export const vision = {
  title: "Vision",
  desc: "To become a trusted national leader in skill-based education—producing globally competent professionals who drive innovation and growth.",
  icon: (
    <FaLightbulb className="text-6xl text-green-500 mb-3 mx-auto animate-pulse" />
  ),
};

export const motive = {
  title: "Motive",
  desc:[
    'Promote freelancing and entrepreneurship',
    'Empower individuals with digital and linguistic fluency',
    'Bridge the education-to-employment gap',
    'Empower individuals with digital and linguistic fluency',
  ],
  icon: (
    <FaHandHoldingHeart className="text-6xl text-red-500 mb-3 mx-auto animate-pulse" />
  ),
};

export const coreValues = [
  {
    id: 1,
    icon: <FaStar className="text-4xl text-yellow-500" />,
    title: "Excellence",
    desc: "  We are committed to upholding the highest quality standards in everything we do, from course content to instructional delivery and customer service.",
    bgColor: "bg-yellow-200",
  },
  {
    id: 2,
    icon: <FaLightbulb className="text-4xl text-green-500" />,
    title: "Innovation",
    desc: "We embrace innovation and continuously strive to incorporate the latest advancements in technology and teaching methodologies into our training programs.",
    bgColor: "bg-green-200",
  },
  {
    id: 3,
    icon: <FaUsers className="text-4xl text-blue-500" />,
    title: " Diversity and Inclusion",
    desc: " We celebrate diversity and foster an inclusive learning environment where individuals from diverse backgrounds feel welcome and valued.",
    bgColor: "bg-blue-200",
  },
  {
    id: 4,
    icon: <FaBookOpen className="text-4xl text-purple-500" />,
    title: "Continuous Learning",
    desc: " We believe in the power of lifelong learning and encourage our students and staff to pursue ongoing personal and professional development.",
    bgColor: "bg-purple-200",
  },
  {
    id: 5,
    icon: <FaUserCheck className="text-4xl text-red-500" />,
    title: "Customer Focus",
    desc: "We are dedicated to meeting our customers' unique needs and preferences and prioritize their satisfaction above all else.",
    bgColor: "bg-red-200",
  },
];
