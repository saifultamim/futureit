import Link from "next/link";

import { redirect } from "next/navigation";

import Comingsoon from "@/components/ui/ComingSoon";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
      <Link
        href="/student/dashboard"
        className="hover:text-blue-600 transition-all"
      >
        Home
      </Link>
    </nav>
  );
};

const CertificatePage = async () => {
  const session = {user:{id:1}};
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <Comingsoon />
  
  );
};

export default CertificatePage;
