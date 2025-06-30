import QuizQuestions from "./QuizzQuestions";
import Image from "next/image";
import { useState } from "react";

const QuizResult = ({ quizResult }) => {
  const parseResult =
    quizResult?.[0]?.xresults && quizResult?.[0]?.xresults?.length > 0
      ? JSON.parse(quizResult?.[0]?.xresults)
      : null;

  const [showResults, setShowResults] = useState(false);

  const getSelectedAnswer = (q_id) => {
    const result = parseResult.find(
      (result) => parseInt(result.questionId) === q_id
    );

    return result ? result.givenAnswer : "";
  };

  return (
    <>
      <p className="text-2xl font-medium mb-3 text-gray-600 mt-4">
        Quiz Result
      </p>
      <div className="border border-gray-1 rounded-md bg-white">
        <div className="flex items-center border-b p-4">
          <Image
            src={
              quizResult?.[0]?.xstatus ? "/images/pass.png" : "/images/fail.png"
            }
            width={50}
            height={50}
            alt={quizResult?.[0]?.xstatus ? "pass" : "fail"}
          />
          <div className="ml-4">
            <p className="flex items-center font-semibold text-lg">
              {quizResult?.[0]?.xstatus
                ? "Congratulations"
                : "Sorry! Try Again"}
            </p>
            <span className="text-sm">
              {quizResult?.[0]?.xstatus
                ? "You passed this quiz"
                : "You failed this quiz"}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center border-b drop-shadow-lg px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 shadow-lg">
              <Image
                src="/images/questions.png"
                width={40}
                height={40}
                className="my-2"
                alt="questions"
              />
              <p className="text-lg font-medium text-gray-700">
                Total Questions
              </p>
              <p className="text-lg font-medium ">
                {quizResult?.[0]?.quizzes?.quiz_questions?.length}
              </p>
            </div>
            <div className="flex flex-col items-center  border border-gray-400 rounded-lg p-2 shadow-lg">
              <Image
                src="/images/google-docs.png"
                width={40}
                height={40}
                className="my-2"
                alt="google-docs"
              />

              <p className="text-lg font-medium text-gray-700">
                Correct Answers
              </p>
              <p className="text-lg font-medium ">
                {quizResult?.[0]?.xtotal_correct_ans} /{" "}
                {quizResult?.[0]?.quizzes?.quiz_questions?.length}
              </p>
            </div>
            <div className="flex flex-col items-center  border border-gray-200 rounded-lg p-2 shadow-lg">
              <Image
                src="/images/trophy.png"
                width={40}
                height={40}
                className="my-2"
                alt="trophy"
              />
              <p className="text-lg font-medium text-gray-700">Your Mark</p>
              <p className="text-lg font-medium ">
                {quizResult?.[0]?.xmarks} / {quizResult?.[0]?.xtotal_exam_mark}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-4">
          <button
            onClick={() => setShowResults(!showResults)}
            className="text-center text-blue-500 hover:text-blue-800 font-semibold"
          >
            {showResults ? "Hide Result" : "See Result"}
          </button>
          {showResults && (
            <div className="flex flex-col items-start mt-4 p-4">
              {quizResult?.[0]?.quizzes?.quiz_questions?.map(
                (question, index) => (
                  <QuizQuestions
                    key={question.xsl}
                    question={question}
                    index={index}
                    result={parseResult}
                    selectedOption={getSelectedAnswer(question.xsl)}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizResult;
