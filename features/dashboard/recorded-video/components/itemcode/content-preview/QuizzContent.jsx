import QuizQuestions from "./QuizzQuestions";
import QuizzResult from "./QuizResult";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsStopwatch } from "react-icons/bs";
import { FaQuestionCircle, FaClock, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from "../ContentLoader";

import { BIZID } from "@/constant";
import "react-toastify/dist/ReactToastify.css";

const QuizzContent = ({ quiz, isLastFreeVideoQuiz, onQuizComplete }) => {
  const { quizContent, lessonSerial, numberOfAttemptQuizSingleLesson } = quiz;
  const session = useSession();

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(
    parseInt(quizContent?.xquiz_time) * 60
  );
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPassed, setIsPassed] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    if (isQuizStarted && timeRemaining > 0) {
      const timer = setInterval(
        () => setTimeRemaining((prevTime) => prevTime - 1),
        1000
      );
      return () => clearInterval(timer);
    } else if (timeRemaining === 0) {
      setIsTimeUp(true);
      setIsQuizStarted(false);
    }
  }, [isQuizStarted, timeRemaining]);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setIsTimeUp(false);
    setTimeRemaining(parseInt(quizContent?.xquiz_time) * 60);
  };

  const handleSubmit = async () => {
    if (isTimeUp) {
      toast.error("Time is up! You can't submit the quiz.");
      return;
    }
    setLoading(true);

    const quizResult = quizContent?.quiz_questions?.map((question) => ({
      questionId: question.xsl,
      correctAnswer: question.xanswer,
      givenAnswer: answers[question.xsl] || null,
      isCorrect: question.xanswer === answers[question.xsl] ? 1 : 0,
      questionMark: question.xmarks,
    }));

    const totalCorrectAnswers = quizResult.reduce(
      (total, result) => total + (result.isCorrect ? 1 : 0),
      0
    );
    const totalGettingMark = quizResult.reduce(
      (total, result) => total + (result.isCorrect ? result.questionMark : 0),
      0
    );

    const passStatus = totalGettingMark >= quizContent?.xpass_mark ? 1 : 0;
    setIsPassed(passStatus);

    const payload = {
      bizid: BIZID,
      zemail: "",
      xquizsl: quizContent?.xsl,
      xstudent: Number(session?.data?.user?.id),
      xitemcode: quizContent?.xitemcode,
      xlesson: quizContent?.xlesson,
      xset: quizContent?.xset,
      xresults: JSON.stringify(quizResult),
      xtotal_exam_mark: quizContent?.xquiz_mark,
      xtotal_correct_ans: totalCorrectAnswers,
      xmarks: totalGettingMark,
      xquiz_type: quizContent?.xquiz_type,
      xstatus: passStatus,
    };

    try {
      const response = await fetch("/api/stuportal/v1/quiz/store-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: payload,
          isPassed: passStatus,
          lessonSerial,
        }),
      });
      const responseData = await response.json();
      if (responseData.status !== 201) throw new Error("Submission failed.");

      // CONVERT THIS AN ARRAY, FOR EASY MANAGE RESULT SHOW
      const normalizedQuizResult = Array.isArray(responseData?.data)
        ? responseData?.data
        : [responseData?.data];

      toast.success("Quiz submitted successfully!");
      setQuizResult(normalizedQuizResult);

      if (isLastFreeVideoQuiz && passStatus === 1) {
        setShowCongrats(true);
        setTimeout(() => setShowCongrats(false), 8000);
      }

      onQuizComplete({}, passStatus);
    } catch {
      toast.error("Error submitting quiz.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: Number(answer),
    }));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const renderQuizPreview = (startQuiz, quiz) => (
    <div className="flex flex-col items-center border border-blue-300/80 drop-shadow-lg rounded-md relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 px-6 pb-12">
        {renderQuizPreviewItem(
          FaQuestionCircle,
          "text-blue-500",
          "Total Questions",
          quiz?.quizContent?.quiz_questions?.length,
          "Questions will be shuffled"
        )}
        {renderQuizPreviewItem(
          FaClock,
          "text-green-500",
          "Total Time",
          quiz?.quizContent?.xquiz_time,
          `You have ${quiz?.quizContent?.xquiz_time} to answer all questions`
        )}
        {renderQuizPreviewItem(
          FaCheckCircle,
          "text-red-500",
          "Pass Mark",
          quiz?.quizContent?.xpass_mark,
          `You need to score at least ${quiz?.quizContent?.xpass_mark} to pass the quiz`
        )}
      </div>
      <button
        className="absolute -bottom-5 transform traslate-y-5 border border-blue-700 bg-blue-700 py-2 px-4 shadow-lg rounded-lg text-white"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );

  const renderQuizPreviewItem = (Icon, iconBg, title, value, description) => (
    <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
      <Icon size={28} className={`${iconBg} mb-4`} />
      <div>
        <p className="text-base font-semibold">
          {title}: {value}
        </p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );

  const renderQuiz = (
    quizContent,
    timeRemaining,
    answers,
    onOptionChange,
    onSubmit,
    formatTime
  ) => (
    <div className="border rounded-lg bg-white p-0">
      <div className="border-b flex items-center justify-between p-4 ">
        <p className="text-xl font-semibold">Quiz</p>
        <div className="flex items-center gap-2">
          <BsStopwatch className="text-xl" />
          <span className="pt-1 text-xl">{formatTime(timeRemaining)}</span>
        </div>
      </div>
      <div className="flex flex-col items-start p-3">
        {quizContent?.quiz_questions?.map((question, index) => (
          <QuizQuestions
            key={question.xsl}
            question={question}
            index={index}
            onOptionChange={(questionId, answer) =>
              onOptionChange(questionId, answer)
            }
          />
        ))}
        <button
          type="submit"
          className="border py-1 rounded-lg px-4 mb-2 bg-[#6366F1] text-white font-semibold text-xl"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );

  const renderCongratsMessage = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl text-center">
        <img
          src="/image/tenor-1.gif"
          alt="Congratulations"
          className="w-1/2 mx-auto"
        />
        <h2 className="mt-4 text-3xl font-bold text-green-600">
          Congratulations, {session?.data?.user?.name || ""}
        </h2>
        <p className="my-2 text-xl text-gray-700">
          You&aposve successfully passed the quiz.
        </p>
        <div className="flex gap-6 mt-6">
          <button
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-lg"
            onClick={() => window.location.reload()}
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );

  if (!quizContent || quizContent?.quiz_questions?.length == 0) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-red-600 text-2xl">
          Sorry! Quiz not ready. Try again later.
        </p>
      </div>
    );
  }

  if (quizContent?.xquiz_attempt === numberOfAttemptQuizSingleLesson) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-red-600 text-2xl">
          Sorry! You have reached the maximum number of attempts.
        </p>
      </div>
    );
  }

  return (
    <>
      {loading && <Loader />}
      {showCongrats && renderCongratsMessage()}
      {quizResult ? (
        <QuizzResult quizResult={quizResult} />
      ) : isQuizStarted ? (
        renderQuiz(
          quizContent,
          timeRemaining,
          answers,
          handleChange,
          handleSubmit,
          formatTime
        )
      ) : (
        renderQuizPreview(startQuiz, quiz)
      )}
    </>
  );
};

export default QuizzContent;
