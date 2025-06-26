import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { studentService } from "@/services/student.service";

import {
  Card,
  CardHead,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ManageNotice from "@/features/notice/components/ManageNotice";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
      <Link
        href="/student/dashboard"
        className="hover:text-blue-600 transition-all"
      >
        Home
      </Link>
      <ChevronRightIcon className="w-4 h-4" />
      <span className="text-blue-600 font-medium">Notices</span>
    </nav>
  );
};

const NoticesPage = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  const studentEnrollCourses = await studentService.getStudentEnrollCourses(
    parseInt(session?.user?.id)
  );

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
