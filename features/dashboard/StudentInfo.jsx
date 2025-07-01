// import { Doughnut } from "react-chartjs-2";

import { useSession } from "next-auth/react";
export default function StudentInfo({ user }) {
  // const { data: session } = useSession();
  //   const { student, stats } = data;
  //   const { id, name, overallProgress, moduleInfo } = student;
  //   const { completedModule, totalModule } = moduleInfo || {};
  //   const courseProgressData = {
  //     labels: ["Completed", "In Progress"],
  //     datasets: [
  //       {
  //         label: "Course Progress",
  //         data: [stats.completedCourses, stats.inProgressCourses],
  //         backgroundColor: ["#4CAF50", "#FF9800"],
  //         hoverBackgroundColor: ["#66BB6A", "#FFB74D"],
  //       },
  //     ],
  //   };

  //   const shouldDisplayChart =
  //     stats.completedCourses > 0 || stats.inProgressCourses > 0;
  //   const progressWidth = (completedModule / totalModule) * 100;

  return (
    <div className="bg-neutral-50 shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-between px-5 sm:px-6 py-6 mb-4">
      {/* Left Side: Welcome Text */}
      {/* <div className="md:w-1/2 px-2">
        <h1 className="text-lg md:text-xl xl:text-3xl font-title text-primary-500">
          Welcome back, <span className="font-bold text-2xl">{user?.name}</span>
        </h1>
        <p className="text-sm mt-1">
          Your id is:
          <span className="font-bold">{(user as any)?.id}</span>
        </p>
      </div> */}

      <div
        className={`md:w-1/2 mt-6 md:mt-0 grid grid-cols-1 md:grid-cols-${
          1 == 1 ? "3" : "2"
        } gap-6`}
      >
        {/* Overall Progress Card */}
        {/* <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-lg shadow-lg p-6 flex flex-col transition-transform hover:scale-105 self-center">
          <Link href="/stuportal/recorded-video">
            <h2 className="text-3xl font-bold">{overallProgress}%</h2>
            <p className="text-sm">Overall Progress</p>
            <div className="w-full bg-gray-200 rounded-full mt-2">
              <div
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </Link>
        </div> */}

        {/* Lessons Completed Card */}
        {/* <div className="bg-gradient-to-r from-red-400 to-orange-500 text-white rounded-lg shadow-lg p-6 flex flex-col transition-transform hover:scale-105 self-center">
          <Link href="/stuportal/recorded-video">
            <h2 className="text-3xl font-bold">
              {completedModule}/{totalModule}
            </h2>
            <p className="text-sm">Lessons Completed</p>
            <div className="w-full bg-gray-200 rounded-full mt-2">
              <div
                className="bg-green-400 h-2 rounded-full"
                style={{
                  width: `${isNaN(progressWidth) ? 0 : progressWidth}%`,
                }}
              />
            </div>
          </Link>
        </div> */}

        {/* Doughnut Chart */}
        {/* {shouldDisplayChart && (
          <div className="flex items-center justify-center w-full">
            <Doughnut
              data={courseProgressData}
              options={{
                maintainAspectRatio: false, // Allow custom width/height by disabling the aspect ratio constraint
                cutout: "70%",
                responsive: true, // Ensure the chart responds to the container's size
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        const label = tooltipItem.label || "";
                        const value = tooltipItem.raw || 0;
                        return `${label}: ${value}`;
                      },
                    },
                  },
                  legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                      color: "#333",
                    },
                  },
                },
              }}
              className="rounded-2xl"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "150px",
              }}
            />
          </div>
        )} */}
      </div>
    </div>
  );
}

// function getProgressStatus(progress) {
//   if (progress <= 10) return "Keep pushing your limits, every step counts!";
//   if (progress <= 50) return "good! You're making steady progress; keep it up!";
//   if (progress <= 80)
//     return "very good! You're doing fantastic; your efforts are showing!";
//   if (progress <= 100)
//     return "excellent! You're at the top of your game; keep striving for greatness!";
//   return "cool";
// }
