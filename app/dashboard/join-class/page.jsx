import Link from "next/link";
import { Icons } from "@/components/Icon";
import Card from "@/components/ui/card/Card";
import CardTitle from "@/components/ui/card/CardTitle";
import CardHead from "@/components/ui/card/CardHead";
import CardDescription from "@/components/ui/card/CardDescription";
import CardContent from "@/components/ui/card/CardContent";
import { Suspense } from "react";
import ClassLists from "@/features/dashboard/join-class/components/ClassList";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
      <Link href="/dashboard" className="hover:text-blue-600 transition-all">
        Home
      </Link>
      <Icons.rightArrow className="w-4 h-4" />
      <span className="text-blue-600 font-medium">Join Class</span>
    </nav>
  );
};

const JoinClassPage = async () => {
  const classes = [
    {
      xclass: 1,
      lesson: { xdesc: "xdesc" },
      xstarttime: "13:12", // 24-hour or format this too
      xstartdate: "2026-11-03", // ✅ ISO format
      xmeetingpass: "hour",
      xjoinlink: "https://momentjs.com/",
    },
  ];
  return (
    <div>
      <Breadcrumb />
      <Card>
        <CardHead>
          <CardTitle>Join Class</CardTitle>
          <CardDescription>
            Manage your class attendance and join seamlessly.
          </CardDescription>
        </CardHead>
        <CardContent>
          <div className="space-y-6">
            <Suspense
              fallback={<div className="text-red-200">Loading Classess...</div>}
            >
              <ClassLists
                classes={classes}
                // timezone={userTimezone}
              />
            </Suspense>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinClassPage;
