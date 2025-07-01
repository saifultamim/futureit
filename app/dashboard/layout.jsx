import { Suspense } from "react";
import AppHeader from "@/components/dashboard/layout/app-header";
// import "../globals.css";
import AppSidebar from "@/components/dashboard/layout/app-sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";

export default function StudentDashborad({ children }) {
  return (
    <div suppressHydrationWarning={true}>
      <SidebarProvider>
        {/* <AppSidebar /> */}
        {/* <AppHeader /> */}
        {/* {children} */}
        <div className="flex flex-1 flex-col min-h-screen">
          <AppSidebar />
          <div className="sm:pl-64">
            <AppHeader />
            <main className="flex flex-1 flex-col">
              <div className="px-4 sm:px-10 pt-6 pb-16">
                <Suspense
                  fallback={
                    <section className="w-full h-screen flex items-center justify-center">
                      {/* <Loader /> */}
                    </section>
                  }
                >
                  {children}
                  {/* <StudentDataLoad>{children}</StudentDataLoad> */}
                </Suspense>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
