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
  desc: "Future IT Language Training Institute is a premier institution providing cutting-edge IT and soft skills training. We believe in nurturing talent and fostering a learning environment that encourages creativity, critical thinking, and collaboration. Recognizing the rapid evolution of technology and the increasing importance of soft skills in the modern workplace, our founders created a comprehensive training institute that would equip learners with the knowledge and abilities needed to thrive in today's competitive landscape.",
};
export const mission = {
  title: "Mission",
  desc: "We aim to bridge the gap between education and industry by delivering high-quality, industry-relevant training programs that equip learners with the practical skills and expertise necessary for success in their chosen fields.",
  icon: (
    <FaBullseye className="text-6xl text-blue-500 mb-3 mx-auto animate-pulse" />
  ),
};

export const vision = {
  title: "Vision",
  desc: " We envision a future where individuals from all walks of life can access top-notch training and development opportunities that enable them to achieve their personal and professional goals.",
  icon: (
    <FaLightbulb className="text-6xl text-green-500 mb-3 mx-auto animate-pulse" />
  ),
};

export const motive = {
  title: "Motive",
  desc: "At Future IT Language Training Institute, our motive encapsulates the essence of our vision and commitment to our learners. 'Learn Fun Earn' isn't just a tagline; it's a guiding principle that drives everything we do. 'Learn Fun Earn' isn't just a motto—it's a promise. Join us on this journey of discovery, growth, and achievement, and let's learn, have fun, and earn together!",
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
