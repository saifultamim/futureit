import { Suspense, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Icons } from "@/components/Icon";
import Card from "@/components/ui/card/Card";
import CardContent from "@/components/ui/card/CardContent";
import { EmptyList } from "@/components/ui/EmptyList";
import { apiDelay } from "@/utils/apiDelay";
import { ExamTimerCountdown } from "@/features/dashboard/exam/components/ExamTimerCountDown";
import { ValidationAlerts } from "@/features/dashboard/exam/components/ValidationAlerts";
import { ExamQuestionCard } from "@/features/dashboard/exam/components/ExamQuestionCard";
import { ExamViewType } from "@/utils/data/constant";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
      <Link href="/dashboard" className="hover:text-blue-600 transition-all">
        Home
      </Link>
      <Icons.rightArrow className="w-4 h-4" />
      <Link
        href="/dashboard/exam"
        className="text-blue-600 hover:text-blue-600 transition-all"
      >
        Exam
      </Link>
    </nav>
  );
};

const fetchExam = async (id) => {
  try {
    const result = await getExamAction(id, ExamViewType.START);
    return result;
  } catch (error) {
    return {
      success: false,
      errorType: "FETCH_ERROR",
      message: "Failed to fetch exam",
    };
  }
};

const fetchQuestions = async (exam) => {
  await apiDelay();

  try {
  } catch (error) {
    return {
      success: false,
      data: null,
      error: "Failed to fetch questions",
    };
  }
};

const Exam = ({ fetchExam }) => {
  const result = {
    success: true,
    exam: [
      {
        xexammstsl: "EX12345",
        xbatch: "Batch A",
        xitemcode: "ITM101",
        xlessonno: "L01",
        xset: "Set-1",
        examtype: "MCQ",
        passmark: 40,
        xdate: "2025-07-01",
        xstarttime: "10:00",
        xendtime: "11:00",
        xenddate: "2025-07-01",
      },
    ],
  };
  return (
    <>
      {/* Countdown */}
      <ExamTimerCountdown exam={result.exam} />

      {/* Breadcrumb always at the top */}
      <Breadcrumb />

      {!result.success && result.errorType !== undefined ? (
        <ValidationAlerts type={result.errorType} message={result.message} />
      ) : (
        <>
          <Card className="mb-5">
            <CardContent>
              <div className="flex items-center">
                <h1 className="text-sm md:text-xl font-semibold text-gray-700">
                  Lecture: {result.exam?.seitem?.xdesc}
                </h1>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Suspense
                fallback={
                  <div className="text-gray-600">Loading Questions...</div>
                }
              >
                <ExamQuestions
                  fetchQuestions={() => fetchQuestions(result.exam)}
                  exam={result.exam}
                />
              </Suspense>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
};

const ExamQuestions = ({ fetchQuestions, exam }) => {
  //   const result = use(fetchQuestions());
  const result = {
    success: true,
    data: {
      questions: [
        {
          xexamquessl: "1",
          xans: "xans",
          qmark: "qmark",
          xoption: "xoption",
          xquestiontitle: "xquestiontitle",
          xoption: JSON.stringify({
            1: "Option A",
            2: "Option B",
            3: "Option C",
            4: "Option D",
          }),
        },
      ],
    },
  };
  if (!result.success) {
    <ValidationAlerts
      type={result.errorType}
      message="Failed to load questions"
    />;
  }

  if (!result.data?.questions.length) {
    return (
      <EmptyList
        title="No questions found"
        description="It looks like there are no questions available for this exam at the moment. Please check back later or contact support for more information."
      />
    );
  }

  return (
    <ExamQuestionCard
      exam={exam}
      questions={result.data?.questions}
      mode={ExamViewType.START}
    />
  );
};

export default function ExamPage({ params }) {
  //   const { id } = use(params);
  const id = 1001;
  const examId = Number(id);

  if (isNaN(examId) || examId <= 0) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="text-gray-600">Loading Exam...</div>}>
        <Exam fetchExam={() => fetchExam(examId)} />
      </Suspense>
    </div>
  );
}
