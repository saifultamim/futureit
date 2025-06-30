import { FaRegCheckCircle, FaTimes } from "react-icons/fa";
const QuizQuestion = ({
  question,
  index,
  result,
  onOptionChange,
  selectedOption,
}) => {
  const { xoptions: optionsString, xsl, xtitle, xmarks } = question;
  const options = JSON.parse(optionsString);

  const isCorrect = result?.[index]?.isCorrect === 1;

  const getSelectedOption = (questionIndex, optionIndex) => {
    if (!result?.length) return "";

    const givenAnswer = result?.[questionIndex]?.givenAnswer;
    const correctAnswer = result?.[questionIndex]?.correctAnswer;

    if (result[questionIndex].isCorrect === 1 && givenAnswer != 0) {
      if (givenAnswer === optionIndex) {
        return "bg-green-200 rounded-sm";
      } else {
        return "";
      }
    } else {
      if (givenAnswer === optionIndex) {
        return "bg-red-200 rounded-sm";
      } else {
        if (correctAnswer === optionIndex) {
          return "bg-green-200 rounded-sm";
        } else {
          return "";
        }
      }
    }
  };

  return (
    <div className="q-box mb-4 p-3 bg-white rounded-lg border-1 border-gray-300 shadow-xl w-full text-left">
      <div className="flex justify-between items-baseline text-sm lg:text-md font-bold mb-3 text-[#781919]">
        <span className="flex-1">
          {index + 1}. {xtitle} <span className="text-danger">*</span>
        </span>
        <span className="flex items-center gap-2">
          {result?.[index] ? (
            isCorrect ? (
              <FaRegCheckCircle className="text-green-600" />
            ) : (
              <FaTimes className="text-red-600" />
            )
          ) : null}
          {xmarks}
        </span>
      </div>
      <div className="q-option space-y-3">
        {Object.values(options).map((optionValue, optionIndex) => (
          <label
            className={`${getSelectedOption(
              index,
              optionIndex + 1
            )} text-black text-md flex items-center cursor-pointer`}
            key={optionIndex}
          >
            <input
              type="radio"
              name={`questionoption-${xsl}`}
              value={optionIndex + 1}
              onChange={() => onOptionChange(xsl, optionIndex + 1)}
              className="mr-2"
              checked={
                result && result?.[index]?.givenAnswer === optionIndex + 1
              }
              disabled={!!result}
            />
            <span className="text-sm">{optionValue}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
