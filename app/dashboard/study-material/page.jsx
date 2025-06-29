import Link from "next/link";

import { redirect } from "next/navigation";

import { Icons } from "@/components/Icon";

import Card from "@/components/ui/card/Card";
import CardHead from "@/components/ui/card/CardHead";
import CardTitle from "@/components/ui/card/CardTitle";
import CardDescription from "@/components/ui/card/CardDescription";
import CardContent from "@/components/ui/card/CardContent";
import ManageStudyMaterial from "@/features/web/dashboard/study-material/components/ManageStudyMaterial";

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
      <span className="text-blue-600 font-medium">Study Materials</span>
    </nav>
  );
};

const StudyMaterialPage = async () => {
  const session = {user:{id:'1'}}
  if (!session?.user) {
    redirect("/login");
  }

  const studentEnrollCourses =  [
    {xitemcode:'1012',xdesc:'xdesc'}
  ];

  return (
    <div>
      <Breadcrumb />
      <Card>
        <CardHead>
          <CardTitle>Study Material</CardTitle>
          <CardDescription>
            Access a wide range of study materials including notes, video,
            guides, and resources to help you excel in your academic journey.
            Stay organized and prepare effectively for your exams.
          </CardDescription>
        </CardHead>
        <CardContent>
          <ManageStudyMaterial
            studentEnrollCourses={studentEnrollCourses}
            studentId={session?.user?.id}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialPage;
