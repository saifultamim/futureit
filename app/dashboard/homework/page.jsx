import Link from "next/link";



import { Icons } from "@/components/Icon";
import Card from "@/components/ui/card/Card";
import CardHead from "@/components/ui/card/CardHead";
import CardTitle from "@/components/ui/card/CardTitle";
import CardDescription from "@/components/ui/card/CardDescription";
import CardContent from "@/components/ui/card/CardContent";
import ManageHomeWork from "@/features/dashboard/homework/components/ManageHomeWork";


const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
      <Link
        href="/student/dashboard"
        className="hover:text-blue-600 transition-all"
      >
        Home
      </Link>
      {/* <ChevronRightIcon className="w-4 h-4" /> */}
      <Icons.rightArrow />
      <span className="text-blue-600 font-medium">Home Works</span>
    </nav>
  );
};

const HomeworkPage = async () => {


const id  = '1'
const studentEnrollCourses = [ 
  {xitemcode:'102002',xdesc:'xdesc1'},
   {xitemcode:'102004',xdesc:'xdesc2'},
]

  return (
    <div>
      <Breadcrumb />
      <Card>
        <CardHead>
          <CardTitle>Homework Submission</CardTitle>
          <CardDescription>
            Submit your homework on time and stay on track with your coursework.
            This page provides an overview of your assignments and their
            submission deadlines.
          </CardDescription>
        </CardHead>
        <CardContent>
          <ManageHomeWork
            studentEnrollCourses={studentEnrollCourses}
            studentId={id}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeworkPage;
