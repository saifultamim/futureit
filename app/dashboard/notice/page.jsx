import Link from "next/link";
import { redirect } from "next/navigation";



import { Icons } from "@/components/Icon";

import Card from "@/components/ui/card/Card";
import CardHead from "@/components/ui/card/CardHead";
import CardTitle from "@/components/ui/card/CardTitle";
import CardDescription from "@/components/ui/card/CardDescription";
import CardContent from "@/components/ui/card/CardContent";
import ManageNotice from "@/features/dashboard/Notice/components/ManageNotice";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
      <Link
        href="/student/dashboard"
        className="hover:text-blue-600 transition-all"
      >
        Home
      </Link>
      <Icons.rightArrow className="w-4 h-4" />
      <span className="text-blue-600 font-medium">Notices</span>
    </nav>
  );
};

const NoticesPage = async () => {

const studentEnrollCourses = [
  {xitemcode:'1001',xdesc:"xdesc1",},
  {xitemcode:'1002',xdesc:"xdesc2",},
]
const session = {user:{id:1}}

  return (
    <div>
      <Breadcrumb />
      <Card>
        <CardHead>
          <CardTitle>Important Notices</CardTitle>
          <CardDescription>
            Stay updated with the latest notices regarding your courses. This
            page provides all the important announcements, deadlines, and
            events.
          </CardDescription>
        </CardHead>
        <CardContent>
          <ManageNotice
            studentEnrollCourses={studentEnrollCourses}
            studentId={session?.user?.id}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default NoticesPage;
