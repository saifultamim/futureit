import Link from "next/link";
import { Icons } from "@/components/Icon";
import Card from "@/components/ui/card/Card";
import CardHead from "@/components/ui/card/CardHead";
import CardTitle from "@/components/ui/card/CardTitle";
import CardDescription from "@/components/ui/card/CardDescription";
import CardContent from "@/components/ui/card/CardContent";
import ManageExam from "@/features/dashboard/exam/components/ManageExam";

const Breadcrumb = function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
      <Link
        href="/student/dashboard"
        className="hover:text-blue-600 transition-all"
      >
        Home
      </Link>
      <Icons.rightArrow className="w-4 h-4" />
      <span className="text-blue-600 font-medium">Exams</span>
    </nav>
  );
};

export default async function ExamPage() {
  return (
    <div>
      <Breadcrumb />
      <Card>
        <CardHead>
          <CardTitle>Examinations</CardTitle>
          <CardDescription>
            Access your scheduled exams, including regular assessments and
            re-exam opportunities. Stay updated on exam dates, guidelines, and
            eligibility to ensure smooth participation in your assessments.
          </CardDescription>
        </CardHead>
        <CardContent>
          <ManageExam />
        </CardContent>
      </Card>
    </div>
  );
}
