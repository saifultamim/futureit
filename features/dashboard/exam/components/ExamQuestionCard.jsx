"use client";

import { Icons } from "@/components/Icon";
import { ExamViewType } from "@/utils/data/constant";
import { useState, useTransition } from "react";

export function ExamQuestionCard({
  exam,
  questions,
  mode = ExamViewType.START,
}) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isPending, startTransition] = useTransition();

  const resultData =
    exam?.exam_results && exam?.exam_results?.[0]?.result
      ? JSON.parse(exam?.exam_results?.[0]?.result)
      : [];

  const handleAnswerSelect = (questionId, optionId) => {
    if (mode === ExamViewType.RESULT) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const isAllAnswered = () => {
    return questions.every((question) => selectedAnswers[question.xexamquessl]);
  };

  const getAnswerStatus = (questionId, optionId) => {
    if (mode !== "result") return null;

    const answer = resultData.find((a) => a.questionId === questionId);
    if (!answer) return null;

    const isCorrect = Number(optionId) === answer.correctAnswer;
    const wasSelected = Number(optionId) === answer.givenAnswer;

    if (isCorrect)
      return {
        classname: "border-green-500/50 bg-green-500/5",
        isCorrect,
      };
    if (wasSelected)
      return {
        classname: "border-red-500/50 bg-red-500/5",
        isCorrect,
      };
    return null;
  };

  const calculateResults = () => {
    const answers = questions.map((question) => ({
      questionId: question.xexamquessl,
      givenAnswer: selectedAnswers[question.xexamquessl] || "",
      correctAnswer: question.xans,
      questionMark: question.qmark,
      status: selectedAnswers[question.xexamquessl] === question.xans ? 1 : 0,
    }));

    const totalMark = questions.reduce((acc, q) => acc + q.qmark, 0);
    const marks = answers.reduce(
      (acc, ans) => acc + (ans.status === 1 ? ans.questionMark : 0),
      0
    );

    return { answers, marks, totalMark };
  };

  const handleSubmit = () => {
    if (!isAllAnswered()) {
      alert("Please answer all questions before submitting.");
      return;
    }

    startTransition(async () => {
      const { answers, marks, totalMark } = calculateResults();
      const totalCorrectAnswers = answers.filter(
        (ans) => ans.status === 1
      ).length;
      const passStatus = marks >= exam?.passmark ? "pass" : "fail";

      const formData = {
        exam_id: exam.xexammstsl,
        xbatch: exam.xbatch,
        xitemcode: exam.xitemcode,
        xlessonno: exam.xlessonno,
        xset: exam.xset,
        examtype: exam.examtype,
        total_exam_mark: totalMark,
        result: JSON.stringify(answers),
        submit_time: new Date().toISOString(),
        total_correct_ans: totalCorrectAnswers,
        marks,
        pass_status: passStatus,
        exam_status: passStatus === "pass" ? 1 : 0,
        status: 1,
      };

      const examTiming = {
        xdate: exam.xdate,
        xenddate: exam.xenddate,
        xstarttime: exam.xstarttime,
        xendtime: exam.xendtime,
      };

      try {
        await submitExamAction(formData, examTiming);
      } catch (error) {
        console.error("Exam submission error:", error);
      }
    });
  };

  return (
    <div>
      {mode === ExamViewType.START && (
        <div className="mb-4 p-3 text-xs md:text-base border-l-4 bg-blue-100 border-blue-500 text-blue-800 rounded">
          ⚠️ <strong>Important:</strong> You must answer all questions before
          time runs out. Otherwise, you will not be able to submit the exam!
        </div>
      )}

      {questions?.map((question, index) => {
        const options = question.xoption ? JSON.parse(question.xoption) : {};
        if (Object.keys(options).length == 5 && options.hasOwnProperty("0")) {
          delete options[0];
        }

        const result =
          mode === "result"
            ? resultData.find((r) => r.questionId === question.xexamquessl)
            : null;
        const IconComponent = Icons[result?.status === 1 ? "check" : "x"];

        return (
          <div key={question.xexamquessl} className="mb-7">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-gray-600">
                  Question #{index + 1}
                </div>

                {mode === "result" && result && (
                  <div
                    className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow ${
                      result?.status === 1
                        ? "bg-green-500/10 text-green-700 hover:bg-green-500/20"
                        : "bg-red-500/10 text-red-700 hover:bg-red-500/20"
                    }`}
                    data-sentry-component="Badge"
                    data-sentry-source-file="badge.tsx"
                  >
                    <IconComponent className="mr-1 h-4 w-4" />
                    {result?.status === 1 ? "Correct" : "Incorrect"}
                    {!result?.givenAnswer && " (Not Attempted)"}
                  </div>
                )}
              </div>

              <div className="pt-2 text-sm md:text-base font-medium  text-gray-800">
                {question.xquestiontitle}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {Object.entries(options).map(([optionId, optionText]) => {
                const incrementedOptionId = Number(optionId) + 1;

                const answerStatus = getAnswerStatus(
                  question.xexamquessl,
                  incrementedOptionId
                );
                return mode === "result" ? (
                  <div
                    key={optionId}
                    className={`p-4 rounded-lg border ${answerStatus?.classname} transition-colors`}
                  >
                    <div className="flex items-center justify-between gap-3 leading-normal">
                      {optionText}
                      {answerStatus?.isCorrect && (
                        <Icons.checkCircle className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                ) : (
                  <label
                    key={optionId}
                    className={`block border rounded-lg p-3 cursor-pointer transition-colorshover:bg-gray-200 text-sm md:text-base"
                      `}
                  >
                    <input
                      type="radio"
                      name={`question-${question.xexamquessl}`}
                      value={optionId}
                      checked={
                        selectedAnswers[question.xexamquessl] ===
                        incrementedOptionId
                      }
                      onChange={() =>
                        handleAnswerSelect(
                          question.xexamquessl,
                          incrementedOptionId
                        )
                      }
                      className="mr-3"
                    />
                    {optionText}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      {mode != ExamViewType.RESULT && (
        <button
          onClick={handleSubmit}
          disabled={!isAllAnswered() || isPending}
          className={`mt-6 px-6 py-2 font-bold rounded-lg ${
            !isAllAnswered()
              ? "bg-gray-200 cursor-not-allowed text-gray-400"
              : "bg-blue-500 text-white"
          }`}
        >
          {isPending ? "Submitting..." : "Submit Exam"}
        </button>
      )}
    </div>
  );
}
