import { Icons } from "@/components/Icon";
import Card from "@/components/ui/card/Card";
import CardContent from "@/components/ui/card/CardContent";
import CardDescription from "@/components/ui/card/CardDescription";
import CardHead from "@/components/ui/card/CardHead";
import CardTitle from "@/components/ui/card/CardTitle";
import ManageMarketPlaceVideo from "@/features/web/dashboard/marketplace-video/components/ManageMarketPlaceVideo";
import Link from "next/link";

import { redirect } from "next/navigation";


const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
      <Link
        href="/dashboard"
        className="hover:text-blue-600 transition-all"
      >
        Home
      </Link>
      <Icons.rightArrow className="w-4 h-4" />
      <span className="text-blue-600 font-medium">Marketplace Videos</span>
    </nav>
  );
};

const MarketplaceVideo = async () => {
  const session = {user:{id:1}};
  if (!session?.user) {
    redirect("/login");
  }


const studentEnrollCourses = [
  {xitemcode:"1001",xedsc:"xdesc1"},
  {xitemcode:"1002",xedsc:"xdesc2"},
]
  return (
    <div>
      <Breadcrumb />
      <Card>
        <CardHead>
          <CardTitle>Marketplace Videos</CardTitle>
          <CardDescription>
            Explore a vast collection of marketplace videos, including
            tutorials, guides, and expert insights to enhance your knowledge.
            Stay updated and make informed decisions with high-quality video
            content.
          </CardDescription>
        </CardHead>
        <CardContent>
          <ManageMarketPlaceVideo
            studentEnrollCourses={studentEnrollCourses}
            studentId={session?.user?.id}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketplaceVideo;
